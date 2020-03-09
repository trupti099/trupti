import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.scss']
})
export class ParcelListComponent implements OnInit {
  // displayedColumns = ['id', 'name', 'progress', 'color','action'];
  displayedColumns = [
    "id",
    "barcodeId",
    "senderName",
    "reciverName",
    // "senderPhoneNO",
    // "reciverPhoneNo",
    // "senderAddress",
    // "reciverAddress",
    "psp",
    "pos",
    // "parcelType",
    "packageCode",
    "status",
    // "action"
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
  const barcodeId = BARCODEID[Math.round(Math.random() * (BARCODEID.length - 1))]
  const senderName = SENDERNAME[Math.round(Math.random() * (SENDERNAME.length - 1))]
  const reciverName = RECIVERNAME[Math.round(Math.random() * (RECIVERNAME.length - 1))]
  const senderPhoneNO = SENDERPHONENO[Math.round(Math.random() * (SENDERPHONENO.length - 1))]
  const reciverPhoneNo = RECIVERPHONENO[Math.round(Math.random() * (RECIVERPHONENO.length - 1))]
  const senderAddress = SENDERADDRESS[Math.round(Math.random() * (SENDERADDRESS.length - 1))]
  const reciverAddress = RECIVERADDRESS[Math.round(Math.random() * (RECIVERADDRESS.length - 1))]
  const psp = PSP[Math.round(Math.random() * (PSP.length - 1))]
  const pos = POS[Math.round(Math.random() * (POS.length - 1))]
  const parcelType = PARCELTYPE[Math.round(Math.random() * (PARCELTYPE.length - 1))]
  const packageCode = PACKAGECODE[Math.round(Math.random() * (PACKAGECODE.length - 1))]
  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))]


  return {
    id: id.toString(),
    barcodeId: barcodeId,
    senderName: senderName,
    reciverName: reciverName,
    senderPhoneNO: senderPhoneNO,
    reciverPhoneNo: reciverPhoneNo,
    senderAddress: senderAddress,
    reciverAddress: reciverAddress,
    psp: psp,
    pos: pos,
    parcelType: parcelType,
    packageCode: packageCode,
    status: status

  };
}
const BARCODEID = [
  "KZ49 793F T0RC", "IE42 HDEP 2980", "MK54 915U FMHV", "NL02 IVYF 770y",
  "PT92 0563 1762", "MD05 8I1E PWFB", "MC74 0555 0396", "AE55 1416 3041",
  "PK47 BLIV MZ9Q", "PL72 1564 5548", "PT29 9040 8461", "PT39 9525 8955",
  "DO96 K32A 2633", "FI39 6421 6642", "SA72 85WN D0X3", "FR74 2979 4915",
  "CY71 7242 0840", "AD59 1358 6754", "MD90 FVNW HGIR",]
const SENDERNAME = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth']
const RECIVERNAME = ['Charlotte', 'Theodore', 'Isla', 'Oliver', 'Maia',
  'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Isabella', 'Jasper', 'Cora',
  'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth']
const SENDERPHONENO = [7059947795,
  3606762181, 2773012807, 5201194435, 6607379226, 5539403450, 3972245514, 8098015285, 3457265842,
  6825082350, 6686193912, 3305012850, 3706332185, 5335505409, 5757680306, 2526515344, 6298125458,
  3871217927, 6233791278]
const RECIVERPHONENO = [6825082350, 3871217927, 62337912786686193912, 3305012850, 7059947795,
  3606762181, 2773012807, 5201194435, 6607379226, 5539403450, 3972245514, 8098015285, 3457265842, 3706332185, 5335505409, 5757680306, 2526515344, 6298125458,]
const SENDERADDRESS = [
  "8299 Lerdahl Way", "2637 Dixon Terrace", "013 Kedzie Plaza", "288 Jenna Hill",
  "91443 Warrior Junction", "018 Springs Way", "780 Dunning Alley", "52 Derek Place",
  "15980 Morning Drive", "62352 Del Mar Park", "14278 Talisman Road", "009 Cottonwood Road",
  "415 Garrison Circle", "26 Clyde Gallagher Place", "1483 Pine View Hill", "5329 Basil Park",
  "434 Cambridge Hill", "7 Stephen Park", "384 Cody Avenue",]
const RECIVERADDRESS = ["62352 Del Mar Park", "14278 Talisman Road", "009 Cottonwood Road",
  "415 Garrison Circle", "26 Clyde Gallagher Place", "1483 Pine View Hill", "5329 Basil Park",
  "434 Cambridge Hill", "7 Stephen Park", "384 Cody Avenue", "8299 Lerdahl Way",
  "2637 Dixon Terrace", "013 Kedzie Plaza", "288 Jenna Hill", "91443 Warrior Junction",
  "018 Springs Way", "780 Dunning Alley", "52 Derek Place", "15980 Morning Drive",]
const PSP = [
  "Itacoatiara", "Novocherkassk", "Besko", "Pau", "Fuan", "Infonavit", "Villa Cañás",
  "Santa Cruz", "Dziemiany", "Hougong", "Chum Phuang", "Rattanaburi", "Hamburg", "Vorzel",
  "Uummannaq", "Berlin", "Las Cruces", "Xiapu", "Lixu",]
const POS = ["Santa Cruz", "Dziemiany", "Hougong", "Chum Phuang", "Uummannaq", "Berlin", "Las Cruces", "Itacoatiara", "Novocherkassk", "Besko", "Pau", "Fuan", "Infonavit", "Villa Cañás", "Xiapu", "Lixu", "Rattanaburi", "Hamburg", "Vorzel",]
const PARCELTYPE = [
  "image", "audio", "video", "application", "application", "image", "application", "video", "application", "image", "video", "video", "video", "text", "application", "application", "image", "image",]
const PACKAGECODE = [
  "52862014", "10544127", "59779281", "64997200", "51346222", "545695689", "76270150", "65841636", "00937426", "30142588", "60760214", "42423271", "68382163", "551544962", "605128026", "51079285", "369871857", "107428470",]

const PARCELCODE = [
  "52862014", "10544127", "59779281", "64997200", "51346222", "545695689", "76270150", "65841636", "00937426", "30142588", "60760214", "42423271", "68382163", "551544962", "605128026", "51079285", "369871857", "107428470",]
const STATUS = ["delivered", "pending", "delivered", "delivered", "pending", "delivered", "pending", "delivered", "pending", "delivered", "delivered", "pending", "delivered", "delivered", "delivered", "delivered", "delivered", "pending", "pending"]

export interface ParcelData {
  id: string;
  barcodeId: string,
  senderName: string,
  reciverName: string,
  senderPhoneNO: number,
  reciverPhoneNo: number,
  senderAddress: string,
  reciverAddress: string,
  psp: string,
  pos: string,
  parcelType: string,
  packageCode: string,
  status: string,
}