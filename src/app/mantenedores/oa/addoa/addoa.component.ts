import { Component } from '@angular/core';
import { OaDTO } from 'src/app/models/OaDTO';
import { Inject } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { OaService } from 'src/app/services/oa.service';
import { OaHijoDTO } from 'src/app/models/OaHijoDTO';

@Component({
  selector: 'app-addoa',
  templateUrl: './addoa.component.html',
  styleUrls: ['./addoa.component.css']
})
export class AddoaComponent {
  dto: OaDTO;
  redes: any = [];
  niveles: any = [];
  libros: any = [];

  ngOnInit() {
    this.oaService.getRedes().subscribe((data:any)=>{
      this.libros = data.libros;
      this.redes = data.redes;
      console.log(this.libros);
      console.log(this.redes);
    });

    this.niveles = ["1","2","3","4","5","6"];
  }

  constructor(public oaService: OaService) {
    this.dto = new OaDTO();
  }

  onCheckRedChange(event: any) {
    if(event.checked) {
      this.dto.redes.push(event.source.value);
    } else {

      this.dto.redes.forEach((r: string, index) => {
        if (r == event.source.value) {
          this.dto.redes.splice(index, 1);
        }
      });
    }
  }

  onCheckNvlChange(event: any) {
    if(event.checked) {
      this.dto.niveles.push(event.source.value);
    } else {

      this.dto.niveles.forEach((r: string, index) => {
        if (r == event.source.value) {
          this.dto.niveles.splice(index, 1);
        }
      });
    }
  }

  onCheckPriorizadoChange(event: any) {
    if(event.checked) {
      this.dto.prioridad = true;
    } else {
      this.dto.prioridad = false;
    }
  }

  guardarOa() {
    this.oaService.save(this.dto).subscribe((data: any) => {
      window.location.replace("/oas");
    });
  }

  agregarHijo() {
    let oa: OaHijoDTO = new OaHijoDTO();
    /*if (this.dto.niveles.length > 0) {
      this.dto.niveles.forEach((r: string) => {
        oa.niveles.push(r);
      });
    }
    if (this.dto.redes.length > 0) {
      this.dto.redes.forEach((r: string) => {
        oa.redes.push(r);
      });
    }*/
    this.dto.hijos.push(oa);
  }

  onCheckRedHijoChange(event: any, idx: number) {
    console.log(this.dto.hijos);
    if(event.checked) {
      this.dto.hijos[idx].redes.push(event.source.value);
    } else {
      this.dto.hijos[idx].redes.forEach((r: string, index) => {
        if (r == event.source.value) {
          this.dto.hijos[idx].redes.splice(index, 1);
        }
      });
    }
  }

  onCheckNvlHijoChange(event: any, idx: number) {
    console.log(this.dto.hijos);
    if(event.checked) {
      this.dto.hijos[idx].niveles.push(event.source.value);
    } else {
      this.dto.hijos[idx].niveles.forEach((r: string, index) => {
        if (r == event.source.value) {
          this.dto.hijos[idx].niveles.splice(index, 1);
        }
      });
    }
  }

  quitarHijo(idx: number) {
    this.dto.hijos.splice(idx, 1);
  }
  
}
