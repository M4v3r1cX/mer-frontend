import { Component, OnInit } from '@angular/core';
import { ActividadMerDTO } from 'src/app/models/ActividadMerDTO';
import { ActividadService } from 'src/app/services/actividad.service';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addactividad',
  templateUrl: './addactividad.component.html',
  styleUrls: ['./addactividad.component.css']
})
export class AddactividadComponent {
  dto: ActividadMerDTO;
  libros: any = [];
  redes: any = [];
  niveles: any = [];
  titulo: string = "";
  idActividad: string = "";

  ngOnInit() {
    this.actividadService.getLibrosYRedes().subscribe((data:any)=>{
      this.libros = data.libros;
      this.redes = data.redes;
      console.log(this.libros);
      console.log(this.redes);
    });

    this.niveles = ["1","2","3","4","5","6"];
  }

  constructor(public actividadService: ActividadService, @Inject(MAT_DIALOG_DATA) public data: string) {
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
}
