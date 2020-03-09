import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../models/location/country';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http:HttpClient) { }

  AddCountry(name:string,sortName:string,phoneCode:number):Observable<Country>{
    const newCountry=new Country(name,sortName,phoneCode)
    return this.http.post<Country>(`${environment.apiUrl}/api/addCountry`,newCountry)
  }
  getCountryData():Observable<Country[]>{
    return this.http.get<Country[]>(`${environment.apiUrl}/api/getCountry`);
  }
  deleteCountry(id):Observable<Country>{
    const delData={
      id:id,
      sortName:"",
      name:"",
      phoneCode:""
    }
    return this.http.post<Country>(`${environment.apiUrl}/api/deleteCountry`,delData);
  }
}
