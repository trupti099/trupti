import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recent-raised-tickets',
  templateUrl: './recent-raised-tickets.component.html',
  styleUrls: ['./recent-raised-tickets.component.scss']
})
export class RecentRaisedTicketsComponent implements OnInit {


  displayedColumns = ['title', 'des','name'];
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
  
  const TITLE = ['Title goes here', 'Title goes here', 'Title goes here', 'Title goes here', 'Title goes here'];
  const DES = ['Description goes here', 'Description goes here', 'Description goes here', 'Description goes here', 'Description goes here'];
  const NAME = ['Rajesh','Dev','Sagar','Vicky','Uday'];
  
  export interface UserData {
    title: string;
    des: string;
    name: string;
  }
  



function createNewUser(id: number): UserData {
  const title = TITLE[Math.round(Math.random() * (TITLE.length - 1))];
  
  const des=DES[Math.round(Math.random() * (DES.length - 1))]
  const name = NAME[Math.round(Math.random() * (NAME.length - 1))]
   return {
    // id: id.toString(),
    title: title,
    des: des,
    name: name,
  };
}