import { Component, OnInit } from '@angular/core';
import { TMDto } from 'src/app/models/TMDto';
import { Inject } from '@angular/core';
import { TmService } from 'src/app/services/tm.service';

@Component({
  selector: 'app-addtm',
  templateUrl: './addtm.component.html',
  styleUrls: ['./addtm.component.css']
})
export class AddtmComponent {
  dto: TMDto;
  oas: any = [];
  searchText = "";
  idOa = "";
  oasFiltrados: any = [];

  ngOnInit() {
  }

  constructor(public tmService: TmService) {
    this.dto = new TMDto();
    this.tmService.getOaTm().subscribe((data: any) => {
      console.log(data);
      this.oas = data;
      this.search();
    });
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
      //return element.codigo.toLowerCase() == this.searchText.toLowerCase();
      return element.codigo.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  guardarTm() {
    this.dto.idOa = this.idOa;
    this.tmService.save(this.dto).subscribe((data: any) => {
      window.location.replace("/tms");
    });
  }
}
