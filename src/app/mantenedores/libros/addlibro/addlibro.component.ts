import { Component } from '@angular/core';
import { EntidadGenericaRequest } from 'src/app/models/EntidadGenericaRequest';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent {
  nombre: string;
  descripcion: string;

  constructor(public libroService: LibroService) {
    this.nombre = "";
    this.descripcion = "";
  }

  guardarLibro() {
    let request = new EntidadGenericaRequest();
    request.nombre = this.nombre;
    request.descripcion = this.descripcion;
    console.log(request);

    this.libroService.save(request).subscribe((data: any) => {
      console.log(data);
    });
  }
}
