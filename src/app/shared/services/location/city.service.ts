import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../../models/location/city';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  
  constructor(private http:HttpClient) { }

  addCity(name:string,stateId:number):Observable<City>{
    const newCity=new City(name,stateId);
    return this.http.post<City>(`${environment.apiUrl}/api/addCity`,newCity);

  }

  getCityData(id:number):Observable<City[]>{
    const newId={id:id}
    return this.http.post<City[]>(`${environment.apiUrl}/api/getCity`,newId);
  }
  deleteCity(id):Observable<City>{
    const delCity ={id:id}
    return this.http.post<City>(`${environment.apiUrl}/api/deleteCity`,delCity);
  }
}
