import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-customers-report',
  templateUrl: './customers-report.component.html',
  styleUrls: ['./customers-report.component.scss']
})
export class CustomersReportComponent implements OnInit {
  displayedColumns = [
    "name",
    "city",
    // "state",
    // "country",
    // "email",
    "phoneNo",
    "customerType",
    // "identityProof",
    // "dob",
    "pos",
    "psp",
 
  ]
  dataSource: MatTableDataSource<CustomerData>;
  confirmResut: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private modalService: NgbModal) {
    const parcel: CustomerData[] = [];
    for (let i = 1; i <= 100; i++) { parcel.push(cretaeNewParcel(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(parcel);
    if (this.paginator && this.sort) {
      this.applyFilter('');
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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

function cretaeNewParcel(id: number): CustomerData {

  const name = NAME[Math.round(Math.random() * (NAME.length - 1))]
  const city = CITY[Math.round(Math.random() * (CITY.length - 1))]
  const state = STATE[Math.round(Math.random() * (STATE.length - 1))]
  const country = COUNTRY[Math.round(Math.random() * (COUNTRY.length - 1))]
  const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))]
  const phoneNo = PHONENO[Math.round(Math.random() * (PHONENO.length - 1))]
  const customerType = CUSTOMERTYPE[Math.round(Math.random() * (CUSTOMERTYPE.length - 1))]
  const identityProof = IDENTITYPROOF[Math.round(Math.random() * (IDENTITYPROOF.length - 1))]
  const dob = DOB[Math.round(Math.random() * (DOB.length - 1))]
  const pos = POS[Math.round(Math.random() * (POS.length - 1))]
  const psp = PSP[Math.round(Math.random() * (PSP.length - 1))]


  return {
    id: id.toString(),
    name: name,
    city: city,
    state: state,
    country: country,
    email: email,
    phoneNo: phoneNo,
    customerType: customerType,
    identityProof: identityProof,
    dob: dob,
    pos: pos,
    psp: psp,
  };
}

const NAME = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth']
const CITY = [
  "Крушево", "Huaqiao", "Coayllo", "Pochuta", "Nay Pyi Taw", "Alíartos", "Buea", "Novyy Starodub", "General Santos", "Kyperoúnta", "Veguitas",
  "Ljutomer", "Nanqiao", "Järfälla", "Quisao", "Tha Mai",
  "Dazuo", "Emin", "Mundri",
]
const STATE = ["Georgia", "Oregon", "North Carolina", "Georgia", "Pennsylvania", "Ohio", "Illinois", "Florida", "South Carolina", "Texas", "Oklahoma", "Texas", "Pennsylvania", "Texas", "Texas", "Georgia", "Oregon", "California", "Kentucky",]
const COUNTRY = [
  "Indonesia", "Mexico", "Finland", "Brazil", "France", "Portugal", "Belarus", "Argentina", "Mexico",
  "Japan", "Peru", "Zambia", "Mexico", "Brazil", "Iran", "Iraq", "Russia",
  "Mongolia", "Russia",]
const EMAIL = ["asemble0@bravesites.com", "acoddington1@hostgator.com",
  "ldrysdall2@mtv.com", "jvandevelde3@indiatimes.com", "kbutchart4@51.la", "vdebrett5@histats.com", "lpeplaw6@xing.com", "cjacobovitch7@yellowbook.com",
  "jwackly8@angelfire.com", "hdamato9@who.int", "acrooma@sourceforge.net", "dvolkerb@comcast.net", "ccorbiec@china.com.cn", "bolivetd@tmall.com",
  "mkerswelle@goodreads.com", "vburmanf@over-blog.com", "dbulpittg@studiopress.com", "santoonsh@arizona.edu",
  "fingoldi@berkeley.edu"]

const PHONENO = [6825082350, 3871217927, 5539403450, 3305012850, 7059947795,
  3606762181, 2773012807, 5201194435, 6607379226, 5539403450, 3972245514, 8098015285, 3457265842,
  3706332185, 5335505409, 5757680306, 2526515344, 6298125458,]


const IDENTITYPROOF = ["aadharcard", "licence", "aadharcard", "aadharcard", "licence", "aadharcard", "licence", "aadharcard", "licence", "aadharcard", "aadharcard", "licence", "aadharcard", "aadharcard", "aadharcard", "aadharcard", "aadharcard", "licence", "licence"]
const DOB = [
  "01-Jan-1999", "30-Mar-1998", "03-Apr-1999", "03-Oct-1998", "19-Feb-1999", "21-Jul-1999", "24-Sep-1999", "21-Jan-1999", "29-Nov-1999", "10-Sep-1998", "27-Jun-1999", "19-May-1999", "20-Aug-1999", "02-Nov-1998", "22-May-1999", "13-Nov-1998", "24-Jan-1999", "15-Jan-2000", "04-Jul-1998",
]
const CUSTOMERTYPE = ["Individual", "Individual", "Organisation", "Organisation", "Individual", "Organisation", "Individual", "Organisation", "Individual", "Organisation", "Organisation", "Individual", "Organisation", "Organisation", "Organisation", "Organisation", "Organisation", "Individual", "Individual"]
const POS = ["Santa Cruz", "Dziemiany", "Hougong", "Chum Phuang", "Uummannaq", "Berlin", "Las Cruces", "Itacoatiara", "Novocherkassk", "Besko", "Pau", "Fuan", "Infonavit", "Villa Cañás", "Xiapu", "Lixu", "Rattanaburi", "Hamburg", "Vorzel",]

const PSP = [
  "Itacoatiara", "Novocherkassk", "Besko", "Pau", "Fuan", "Infonavit", "Villa Cañás",
  "Santa Cruz", "Dziemiany", "Hougong", "Chum Phuang", "Rattanaburi", "Hamburg", "Vorzel",
  "Uummannaq", "Berlin", "Las Cruces", "Xiapu", "Lixu"]
export interface CustomerData {
  id: string;
  name: string,
  city: string,
  state: string,
  country: string,
  email: string,
  phoneNo: number,
  customerType: string,
  identityProof: string,
  dob: string,
  pos: string,
  psp: string,
}