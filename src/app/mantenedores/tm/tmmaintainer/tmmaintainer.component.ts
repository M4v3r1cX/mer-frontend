import { Component, OnInit } from '@angular/core';
import { AddtmComponent } from '../addtm/addtm.component';
import { DeletetmComponent } from '../deletetm/deletetm.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TmService } from 'src/app/services/tm.service';

@Component({
  selector: 'app-tmmaintainer',
  templateUrl: './tmmaintainer.component.html',
  styleUrls: ['./tmmaintainer.component.css']
})
export class TmmaintainerComponent {
  constructor(public dialog: MatDialog, public tmService: TmService){}

  tms: any = [];

  ngOnInit() {
    this.tmService.getTms().subscribe((data: any) => {
      this.tms = data;
      console.log(data);
    });
  }

  openDialogAddTm() {

  }

  openDialogEditTm(id: number) {

  }

  openDialogConfirmDelete(id: number) {
    
  }
}
