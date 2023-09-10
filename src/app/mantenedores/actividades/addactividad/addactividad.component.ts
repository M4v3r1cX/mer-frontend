import { Component, OnInit } from '@angular/core';
import { ActividadMerDTO } from 'src/app/models/ActividadMerDTO';
import { ActividadService } from 'src/app/services/actividad.service';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TmService } from 'src/app/services/tm.service';

@Component({
  selector: 'app-addactividad',
  templateUrl: './addactividad.component.html',
  styleUrls: ['./addactividad.component.css']
})
export class AddactividadComponent {
  dto: ActividadMerDTO;
  libros: any = [];
  redes: any = [];
  titulo: string = "";
  idActividad: string = "";
  searchText = "";
  tms: any = [];
  tmsFiltrados: any = [];
  maxList = 6;
  listaFiltrada = true;

  ngOnInit() {
    this.actividadService.getLibros().subscribe((data:any)=>{ // llamar solo libros o hardcodearlo
      this.libros = data;
    });

    this.tmService.getTms().subscribe((data: any) => {
      this.tms = data;
      console.log(this.tms);
      this.search();
    });
  }

  constructor(public actividadService: ActividadService, public tmService: TmService, @Inject(MAT_DIALOG_DATA) public data: string) {
    var spl = data.split(',');
    this.titulo = spl[0];
    this.idActividad = spl[1];
    this.dto = new ActividadMerDTO;
    if (this.idActividad !== '-1') {
      this.actividadService.getActividad(this.idActividad).subscribe((data: any) => {
        this.dto = data;
      });
    }
  }

  searchKey(data: string) {
    console.log('searchKey');
    console.log(data);
    this.searchText = data;
    this.search();
  }

  search() {
    console.log('search');
    let filtrados = 0;
    if (this.searchText === "") {
      /*if (this.tms.length > this.maxList) {
        this.tmsFiltrados = this.tms.slice(0,this.maxList - 1);
        this.listaFiltrada = true;
      } else {*/
        this.tmsFiltrados = this.tms;
      //}
    } else {
      this.tmsFiltrados = this.tms.filter((element: any) => {
        //if (filtrados < this.maxList) {
          //filtrados++;
          return element.codigoOa.toLowerCase().includes(this.searchText.toLowerCase()) || element.descripcion.toLowerCase().includes(this.searchText.toLowerCase()) || element.id.toLowerCase().includes(this.searchText.toLowerCase());
        //}
      });
    }
  }

  guardarActividad() {
    this.actividadService.save(this.dto).subscribe((data: any) => {
      window.location.replace("/actividades");
    });
  }

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.dto.imagenReferencia = imgBase64Path;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  radioChange(event: any) {
    console.log(event);
    this.dto.idTm = event.value;
    console.log(this.dto);
  }
}
