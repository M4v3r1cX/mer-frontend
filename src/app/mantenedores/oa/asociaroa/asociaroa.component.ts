import { Component, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OaService } from 'src/app/services/oa.service';
import { MapasService } from 'src/app/services/mapas.service';
import { ActivatedRoute } from '@angular/router';
import { OaDTO } from 'src/app/models/OaDTO';
import panzoom from "panzoom";
import { OaHijoDTO } from 'src/app/models/OaHijoDTO';
import { OAMapaDTO } from 'src/app/models/OAMapaDTO';

@Component({
  selector: 'app-asociaroa',
  templateUrl: './asociaroa.component.html',
  styleUrls: ['./asociaroa.component.css']
})
export class AsociaroaComponent implements AfterViewInit {
  constructor(public usersService: UsersService, public oaService: OaService, public mapaService: MapasService, private route: ActivatedRoute){
    
  }

  loadingVisible: boolean = false;
  id: string | null = "";
  dto: OaHijoDTO = new OaHijoDTO();
  showLoading: boolean = true;
  pinchoLeft: number = 0;
  pinchoTop: number = 0;
  posicionSeleccionada: boolean = false;
  rutaPincho: string = "assets/map-pin.svg";
  backgroundMapa: string = "assets/Recurso2.svg";
  textoProcesado: string = "";
  xMapa: string[] = [];
  yMapa: string[] = [];
  oasMapa: OAMapaDTO[] = [];

  ngOnInit() {
    this.loadingVisible = true;
    this.showLoading = true;
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      }
    );
    console.log(this.id);
    if (this.id != null) {
      this.oaService.getHijoById(this.id).subscribe((data:any)=>{
        this.dto = data;
        console.log(this.dto);
        if (this.dto.redes !== null && this.dto.redes.length == 1) {
          console.log('aca');
          this.backgroundMapa = this.oaService.getBackgroundMapa(this.dto.redes[0], "oa");
          this.textoProcesado = this.dto.descripcion;
          // llenar el resto de los OAs cargados para esta red
          this.mapaService.getOasHijosByRed(this.dto.redes[0]).subscribe((data:any)=>{
            this.agregarCuadros(data);
          });
        } else {
          console.log('no, acá');
          //mostrar dialogo
        }
        if (this.dto.tieneCoordenadas) {
          this.pinchoLeft = this.dto.x;
          this.pinchoTop = this.dto.y;
          this.posicionSeleccionada = true;
        }
      });
    }
    this.showLoading = false;
    this.loadingVisible = false;
  }

  ngAfterViewInit() {
    let settearValoresPincho = (x: number, y: number) => {
      this.pinchoLeft = x;
      this.pinchoTop = y;
      this.posicionSeleccionada = true;
    };
    panzoom(document.querySelector('#zonamapa')!,
    {
      smoothScroll: false,
      initialX: 0,
      initialY: 0,
      initialZoom: 0.24,
      zoomDoubleClickSpeed: 1,
      onDoubleClick: function(event: any) {
        console.log(event);
        let posx = event.layerX;
        let posy = event.layerY;
        settearValoresPincho(posx,posy);
        return false;
      }
    });
  }

  cancelar() {
    window.location.replace("#/oas");
  }

  guardarPosicion() {
    this.loadingVisible = true;
    this.oaService.guardarPosicionOA(this.dto.id, this.pinchoLeft, this.pinchoTop).subscribe((data: any) => {
      window.location.replace("#/oas");
    });
  }

  agregarCuadros(data: any) {
    console.log(data);
    for (let d of data) {
      if (d.id !== this.id) {
        let oa: OAMapaDTO = new OAMapaDTO();
        let desc:string = d.descripcion;
        oa.descripcion = desc;
        oa.id = d.id;
        oa.nombre = d.codigo;
        oa.x = d.x;
        oa.y = d .y;
        oa.tienePosicionamiento = d.tienePosicionamiento;
        this.xMapa.push(oa.x);
        this.yMapa.push(oa.y);
        this.oasMapa.push(oa);
      }
    }
    this.showLoading = false;
  }
}
