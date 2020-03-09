import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delivery-boys-list',
  templateUrl: './delivery-boys-list.component.html',
  styleUrls: ['./delivery-boys-list.component.scss']
})
export class DeliveryBoysListComponent implements OnInit {

  confirmResut;

  displayedColumns = ['id', 'profile', 'name', 'email','number','role','action'];
  dataSource: MatTableDataSource<UserData>;
  modalOption: NgbModalOptions = {};
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  
  constructor(private modalService:NgbModal) { 
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  open(content) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.windowClass = 'edit-modal right animated fadeInRight';
    this.modalService.open(content,this.modalOption)
    .result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('Err!', reason);
    });
  }

  confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
      this.confirmResut = `Dismissed with: ${reason}`;
    });
  }
}

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const email=EMAIL[Math.round(Math.random() * (EMAIL.length - 1))]
  const number=NUMBER[Math.round(Math.random() * (NUMBER.length - 1))]
   return {
    id: id.toString(),
    name: name,
    number: number,
    role: ROLE[Math.round(Math.random() * (ROLE.length - 1))],
    email:email
  };
}

const ROLE = ['Delivery boy', 'Delivery boy', 'Delivery boy', 'Delivery boy', 'Delivery boy','Delivery boy','Delivery boy','Delivery boy','Delivery boy', 'Delivery boy'];
const NAMES = ['Mahesh Pathak', 'Rakesh Shah', 'Jeet Soni', 'Raju Mistri', 'Ronak Solanki', 'Mit Vaja','Jaydeep Patel','Jeet Patil','Sagar Ranch','Kuldip Seth'];
const NUMBER = ['9101234567', '9101234567', '9101234567', '9101234567', '9101234567', '9101234567','9101234567', '9101234567', '9101234567', '9101234567'];
const EMAIL = ['maheshpathak@gmail.com', 'rakeshshah@gmail.com', 'jeetsoni@gmail.com', 'rajumistri@gmail.com', 'ronaksolanki@gmail.com', 'mitvaja@gmail.com',
  'jaydeeppatel@gmail.com', 'jeetpatil@gmail.com', 'sagarranch@gmail.com', 'kuldipseth@gmail.com'];


export interface UserData {
  id: string;
  name: string;
  number: string;
  role: string;
  email:any;
}
