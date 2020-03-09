import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  displayedColumns = [
    "id",
    "title",
    "description",
    "psp",
    "pos",
    "customerName",
    "customerPhoneNo",
    "status",

  ]
  dataSource: MatTableDataSource<ParcelData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
    const parcel: ParcelData[] = [];
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

}

function cretaeNewParcel(id: number): ParcelData {
  const title = TITLE[Math.round(Math.random() * (TITLE.length - 1))]
  const description = DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))]
  const pos = POS[Math.round(Math.random() * (POS.length - 1))]
  const psp = PSP[Math.round(Math.random() * (PSP.length - 1))]

  const customerName = CUSTOMERNAME[Math.round(Math.random() * (CUSTOMERNAME.length - 1))]
  const customerPhoneNo = CUSTOMERPHONENO[Math.round(Math.random() * (CUSTOMERPHONENO.length - 1))]
  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))]


  return {
    id: id.toString(),
    title: title,
    description: description,
    pos: pos,
    psp: psp,
    customerName: customerName,
    customerPhoneNo: customerPhoneNo,
    status: status,
  };
}
const TITLE = ["image", "audio", "video", "application", "application", "image", "application", "video", "application", "image", "video", "video", "video", "text", "application", "application", "image", "image",]

const DESCRIPTION = [
  "8299 Lerdahl Way", "2637 Dixon Terrace", "013 Kedzie Plaza", "288 Jenna Hill",
  "91443 Warrior Junction", "018 Springs Way", "780 Dunning Alley", "52 Derek Place",
  "15980 Morning Drive", "62352 Del Mar Park", "14278 Talisman Road", "009 Cottonwood Road",
  "415 Garrison Circle", "26 Clyde Gallagher Place", "1483 Pine View Hill", "5329 Basil Park",
  "434 Cambridge Hill", "7 Stephen Park", "384 Cody Avenue"]

const PSP = [
  "Itacoatiara", "Novocherkassk", "Besko", "Pau", "Fuan", "Infonavit", "Villa Cañás",
  "Santa Cruz", "Dziemiany", "Hougong", "Chum Phuang", "Rattanaburi", "Hamburg", "Vorzel",
  "Uummannaq", "Berlin", "Las Cruces", "Xiapu", "Lixu"]

const POS = ["Santa Cruz", "Dziemiany", "Hougong", "Chum Phuang", "Uummannaq", "Berlin", "Las Cruces", "Itacoatiara", "Novocherkassk", "Besko", "Pau", "Fuan", "Infonavit", "Villa Cañás", "Xiapu", "Lixu", "Rattanaburi", "Hamburg", "Vorzel",]
const CUSTOMERNAME = ['Charlotte', 'Theodore', 'Isla', 'Oliver', 'Maia',
  'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Isabella', 'Jasper', 'Cora',
  'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth']
const CUSTOMERPHONENO = [6825082350, 3871217927, 5539403450, 3305012850, 7059947795,
  3606762181, 2773012807, 5201194435, 6607379226, 5539403450, 3972245514, 8098015285, 3457265842, 3706332185, 5335505409, 5757680306, 2526515344, 6298125458,]

const STATUS = ["resolved", "pending", "resolved", "resolved", "pending", "in rocess", "pending", "in rocess", "pending", "in rocess", "in rocess", "pending", "resolved", "resolved", "resolved", "resolved", "resolved", "pending", "pending"]

export interface ParcelData {
  id: string;
  title: string,
  description: string,
  pos: string,
  psp: string,
  customerName: string,
  customerPhoneNo: Number,
  status: string,
}