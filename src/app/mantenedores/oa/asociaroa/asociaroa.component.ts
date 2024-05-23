import { Component, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OaService } from 'src/app/services/oa.service';
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
  id: string | null = "";
  dto: OaDTO = new OaDTO();
  showLoading: boolean = true;
  pinchoLeft: number = 0;
  pinchoTop: number = 0;
  posicionSeleccionada: boolean = false;

  ngOnInit() {
    this.loadingVisible = true;
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      }
    );
    console.log(this.id);
    if (this.id != null) {
      this.oaService.getOa(this.id).subscribe((data:any)=>{
        this.dto = data;
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
}
