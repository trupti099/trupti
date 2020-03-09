import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-recent-parcels',
  templateUrl: './recent-parcels.component.html',
  styleUrls: ['./recent-parcels.component.scss']
})
export class RecentParcelsComponent implements OnInit {


  displayedColumns = ['parcelid', 'psp','pos','status'];
  dataSource: MatTableDataSource<UserData>;
  modalOption: NgbModalOptions = {};
  constructor(private modalService:NgbModal) { 
    const users: UserData[] = [];
    for (let i = 1; i <= 5; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

 
}
  
  const PARCELID = ['#113215', '#113216', '#113210', '#113218', '#113219'];
  const PSP = ['Rajkot','Ahmedabad','Rajkot','Ahmedabad','Rajkot'];
  const POS = ['Kalavad Rd', 'Yagnik Rd', 'Gondal Rd', '150ft Ring Rd', 'Sadhuvashvani Rd'];
  const STATUS = ['Pending', 'Delivered', 'Pending', 'Delivered', 'Pending'];
  
  export interface UserData {
    parcelid: string;
    psp: string;
    pos: string;
    status: string;
  }
  



function createNewUser(id: number): UserData {
  const parcelid = PARCELID[Math.round(Math.random() * (PARCELID.length - 1))];
  const psp=PSP[Math.round(Math.random() * (PSP.length - 1))]
  const pos = POS[Math.round(Math.random() * (POS.length - 1))]
  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))]
   return {
    // id: id.toString(),
    parcelid: parcelid,
    psp: psp,
    pos: pos,
    status: status,
  };
}