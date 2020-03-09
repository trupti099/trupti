import { Injectable } from '@angular/core';
import { DeliveryBoy } from "../models/deliveryboy";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryboyService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({ 
    'Content-Type': 'application/json,application/x-www-form-urlencoded; charset=UTF-8,application/octet-stream',
    'Authorization': localStorage.getItem('FFCUser')
  });

  public addDeliveryBoy(user):Observable<DeliveryBoy> {
    const Data = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      country_id:user.country,
      state_id:user.state,
      city_id:user.city,
      contact:user.contact,
      address:user.address,
      role:user.role,
      datePicker:user.datePicker,
      //profile:user.profile
    }
      //console.log(userData);
    return this.http.post<DeliveryBoy>(`${environment.apiUrl}/api/addDeliveryBoy`,Data);
  }
}
