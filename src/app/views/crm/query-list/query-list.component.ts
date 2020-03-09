import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent implements OnInit {

  confirmResut;

  displayedColumns = ['id', 'name', 'email','phoneNo','message', 'status', 'action'];
  dataSource: MatTableDataSource<UserData>;
  modalOption: NgbModalOptions = {};
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private modalService: NgbModal) {
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
    this.modalService.open(content, this.modalOption)
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
  const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))]
  const phoneNo = PHONENO[Math.round(Math.random() * (PHONENO.length - 1))];
  const message = MESSAGE[Math.round(Math.random() * (MESSAGE.length - 1))]
  return {
    id: id.toString(),
    name: name,
    phoneNo:phoneNo,
    message:message,
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
    email: email
  };
}

const STATUS = ['Active', 'Active', 'Active', 'Active', 'Active', 'Closed', 'Active',
  'Closed', 'Active', 'Closed', 'Active', 'Closed', 'Active', 'Active', 'Active'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth']
const EMAIL = ["asemble0@bravesites.com", "acoddington1@hostgator.com",
  "ldrysdall2@mtv.com", "jvandevelde3@indiatimes.com", "kbutchart4@51.la", "vdebrett5@histats.com", "lpeplaw6@xing.com", "cjacobovitch7@yellowbook.com",
  "jwackly8@angelfire.com", "hdamato9@who.int", "acrooma@sourceforge.net", "dvolkerb@comcast.net", "ccorbiec@china.com.cn", "bolivetd@tmall.com",
  "mkerswelle@goodreads.com", "vburmanf@over-blog.com", "dbulpittg@studiopress.com", "santoonsh@arizona.edu",
  "fingoldi@berkeley.edu"]
const MESSAGE = ["Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message", "Message",]

const PHONENO = [6825082350, 3871217927, 62337912786686193912, 3305012850, 7059947795,
  3606762181, 2773012807, 5201194435, 6607379226, 5539403450, 3972245514, 8098015285, 3457265842, 3706332185, 5335505409, 5757680306, 2526515344, 6298125458,]

export interface UserData {
  id: string;
  name: string;
  phoneNo:number;
  message:string;
  status: string;
  email: any;
}
