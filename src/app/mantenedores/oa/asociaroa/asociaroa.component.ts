import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OaService } from 'src/app/services/oa.service';

@Component({
  selector: 'app-asociaroa',
  templateUrl: './asociaroa.component.html',
  styleUrls: ['./asociaroa.component.css']
})
export class AsociaroaComponent {
  constructor(public usersService: UsersService, public oaService: OaService){}

  loadingVisible: boolean = false;
  oas: any = [];
  searchText = "";
  oasFiltrados: any = [];
  searchText2 = "";
  oasFiltrados2: any = [];
  asociarVisible: boolean = false;
  oaSeleccionado: string = "";

  ngOnInit() {
    this.loadingVisible = true;
    this.oaService.getOas().subscribe((data:any)=>{
      this.oas = data.oas;
    });
    this.loadingVisible = false;
  }

  searchKey(data: string) {
    console.log('searchKey');
    console.log(data);
    this.searchText = data;
    this.search();
  }

  search() {
    console.log('search');
    this.oasFiltrados = this.searchText === ""? this.oas : this.oas.filter((element: any) => {
      return element.codigo.toLowerCase().includes(this.searchText.toLowerCase()) || element.descripcion.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  searchKey2(data: string) {
    console.log('searchKey');
    console.log(data);
    this.searchText2 = data;
    this.search();
  }

  search2() {
    console.log('search');
    this.oasFiltrados2 = this.searchText2 === ""? this.oas : this.oas.filter((element: any) => {
      return element.codigo.toLowerCase().includes(this.searchText2.toLowerCase()) || element.descripcion.toLowerCase().includes(this.searchText2.toLowerCase());
    });
  }

  onCheckOaChange(event: any) {
    /*if(event.checked) {
      this.dto.redes.push(event.source.value);
    } else {
      this.dto.redes.forEach((r: string, index) => {
        if (r == event.source.value) {
          this.dto.redes.splice(index, 1);
        }
      });
    }
    console.log(this.dto.redes);*/
  }

  radioChange(event: any) {
    this.asociarVisible = true;
    /*console.log(event);
    this.dto.idOa = event.value;
    console.log(this.dto);*/
  }
}
