import { Component, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OaService } from 'src/app/services/oa.service';
import { AsociarOaDTO } from 'src/app/models/AsociarOaDTO';
import { ActivatedRoute } from '@angular/router';
import { OaDTO } from 'src/app/models/OaDTO';
import panzoom from "panzoom";

@Component({
  selector: 'app-asociaroa',
  templateUrl: './asociaroa.component.html',
  styleUrls: ['./asociaroa.component.css']
})
export class AsociaroaComponent implements AfterViewInit {
  constructor(public usersService: UsersService, public oaService: OaService, private route: ActivatedRoute){
    
  }

  loadingVisible: boolean = false;
  oas: any = [];
  id: string | null = "";
  oaInicial: OaDTO = new OaDTO();;
  searchText2 = "";
  oasFiltrados2: any = [];
  asociarVisible: boolean = false;
  oaSeleccionado: string = "";
  dto: AsociarOaDTO = new AsociarOaDTO();
  oasSeleccionados: any = [];
  oasPreseleccionados: any[] = [];
  showLoading: boolean = true;

  ngOnInit() {
    this.loadingVisible = true;
    this.oaService.getOas().subscribe((data:any)=>{
      console.log(data);
      this.oas = data.oas;
      this.asociarVisible = true;
      this.search2();
    });
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      }
    );
    console.log(this.id);
    if (this.id != null) {
      this.oaService.getOaAsociado(this.id).subscribe((data:any)=>{
        console.log(data);
        this.oaInicial = data.oaDto;
        this.dto.idOaInicial = this.id || '';
        console.log(data.asociados);
        this.oasPreseleccionados = data.asociados;
        for (let r of this.oasPreseleccionados) {
          this.dto.idOasFinales.push(r.id);
          this.oasSeleccionados.push(r);
        }
        console.log(this.oasPreseleccionados);
      });
    }
    this.loadingVisible = false;
  }

  ngAfterViewInit() {
    panzoom(document.querySelector('#zonamapa')!,
    {
      smoothScroll: false,
      initialX: 0,
      initialY: 0,
      initialZoom: 0.24,
      zoomDoubleClickSpeed: 1,
      onDoubleClick: function(e) {
        console.log(e);
    
        return false; // tells the library to not preventDefault, and not stop propagation
      }
    });
  }

  searchKey2(data: string) {
    console.log('searchKey');
    console.log(data);
    this.searchText2 = data;
    this.search2();
  }

  search2() {
    console.log('search');
    this.oasFiltrados2 = this.searchText2 === ""? this.oas : this.oas.filter((element: any) => {
      return element.codigo.toLowerCase().includes(this.searchText2.toLowerCase()) || element.descripcion.toLowerCase().includes(this.searchText2.toLowerCase());
    });
  }

  onCheckOaChange(event: any) {
    if(event.checked) {
      console.log(event);
      this.dto.idOasFinales.push(event.source.value);
      this.oas.forEach((oa: OaDTO) => {
        if (oa.id == event.source.value) {
          this.oasSeleccionados.push(oa);
          console.log(this.oasSeleccionados);
        }
      });// al desmarcar weas tiene que desaparecer de la lista de cuadraditos! y también tiene que salir la información del OA
    } else {
      this.dto.idOasFinales.forEach((r: string, index) => {
        if (r == event.source.value) {
          this.dto.idOasFinales.splice(index, 1);
        }
      });
      this.oasSeleccionados.forEach((oa: OaDTO, idx: number) => {
        if (oa.id == event.source.value) {
          this.oasSeleccionados.splice(idx, 1);
          console.log(this.oasSeleccionados);
        }
      });
    }
    console.log(this.dto.idOasFinales);
  }

  guardarOas() {
    this.loadingVisible = true;
    this.oaService.saveAsociarOas(this.dto).subscribe((data: any) => {
      window.location.replace("#/oas");
    });
  }

  cancelar() {
    window.location.replace("#/oas");
  }

  deleteAsociaciones(id: string) {

  }

  estaAsociado(id: string) : boolean {
    let ret: boolean = false;

    if (this.oasPreseleccionados != null) {
      /*if (this.oasPreseleccionados.indexOf(id) > -1) { // aca
        ret = true;
        console.log('id ' + id + ' encontrado.');
      }*/
      for (let oa of this.oasPreseleccionados) {
        if (oa.id == id) {
          ret = true;
          console.log('id ' + id + ' encontrado.');
        }
      }
    }
    
    return ret;
  }
}
