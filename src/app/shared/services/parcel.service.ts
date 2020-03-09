import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcel } from '../models/parcel';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders
  ({
    'Content-Type': 'application/json,application/x-www-form-urlencoded; charset=UTF-8,application/octet-stream',
    'Authorization': localStorage.getItem('FFCUser')
  });
  addParcel(parcel):Observable<Parcel>{
    const newParcel={
      senderId: parcel.senderId,
      senderName: parcel.senderName,
      receiverName: parcel.receiverName,
      receiverId: parcel.receiverId,
      senderPhoneNo: parcel.senderPhoneNo,
      receiverPhoneNo: parcel.receiverPhoneNo,
      center: parcel.center,
      packageType: parcel.packageType,
      barCodeNo: parcel.barCodeNo,
      weight: parcel.weight,
      amount: parcel.amount,
      charge: parcel.charge,
      otherCharge: parcel.otherCharge,
      netAmount: parcel.netAmount,
      packageId: parcel.packageId,
      remark: parcel.remark
    }
    console.log(newParcel)  
    return this.http.post<Parcel>(`${environment.apiUrl}/api/addParcel`,newParcel,{headers:this.headers})
  }

}
