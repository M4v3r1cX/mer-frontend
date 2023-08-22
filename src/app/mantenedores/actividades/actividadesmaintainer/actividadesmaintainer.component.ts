import { Component, OnInit } from '@angular/core';
import { AddactividadComponent } from '../addactividad/addactividad.component';
import { DeleteactividadComponent } from '../deleteactividad/deleteactividad.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-actividadesmaintainer',
  templateUrl: './actividadesmaintainer.component.html',
  styleUrls: ['./actividadesmaintainer.component.css']
})
export class ActividadesmaintainerComponent {
  constructor(public dialog: MatDialog, public actividadService: ActividadService) {}

  actividades: any = [];

  ngOnInit() {
    this.actividadService.getActividades().subscribe((data:any)=>{
      this.actividades = data.actividades;
    });
  }

  openDialogAddActividad() {
    const dialogRef = this.dialog.open(AddactividadComponent, {
      height: '700px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogConfirmDelete(id: number, nombre: string) {
    console.log(id);
    const dialogRef = this.dialog.open(DeleteactividadComponent, {
      data: nombre
    });

    dialogRef.afterClosed().subscribe((eliminar: Boolean) => {
      if(eliminar) {
        this.actividadService.deleteActividad(id).subscribe((data: any) => {
          window.location.replace("/actividades");
        });
      }
    });
  }
}
