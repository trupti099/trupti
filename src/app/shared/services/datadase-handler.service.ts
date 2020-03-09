import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatadaseHandlerService {

  constructor(private http:HttpClient) {
    
   }
  headers = new HttpHeaders({
    'Content-Type': 'application/json,application/x-www-form-urlencoded; charset=UTF-8,application/octet-stream',
    'Authorization': localStorage.getItem('FFCUser')
  });
  createPOSDB(no:number) {
    const newDB={id:no}
    return this.http.post<any>(`${environment.apiUrl}/api/createDatabase`,newDB,{headers : this.headers});
  }
}
