import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recent-customers',
  templateUrl: './recent-customers.component.html',
  styleUrls: ['./recent-customers.component.scss']
})
export class RecentCustomersComponent implements OnInit {


  displayedColumns = ['name', 'type','pos'];
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
  
  const NAMES = ['Raghav shah', 'Rakesh mainy', 'Laxman mulchandani', 'Harsh pandya', 'Vicky jogendar'];
  const TYPE = ['Individual','Organisation','Individual','Organisation','Individual'];
  const POS = ['Kalavad Rd', 'Yagnik Rd', 'Gondal Rd', '150ft Ring Rd', 'Sadhuvashvani Rd'];
  
  export interface UserData {
    name: string;
    type: string;
    pos: string;
  }
  



function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  
  const type=TYPE[Math.round(Math.random() * (TYPE.length - 1))]
  const pos = POS[Math.round(Math.random() * (POS.length - 1))]
   return {
    // id: id.toString(),
    name: name,
    type: type,
    pos: pos,
  };
}