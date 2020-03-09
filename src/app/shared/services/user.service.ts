import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: any
  constructor(private http: HttpClient) {
  }
  headers = new HttpHeaders({ 
    'Content-Type': 'application/json,application/x-www-form-urlencoded; charset=UTF-8,application/octet-stream',
    'Authorization': localStorage.getItem('FFCUser')
  });
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/getAll`,{headers:this.headers});
  }

  public getAllPSPs(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/api/getAllPSP`, { headers: this.headers });
  }
  public getAllPOS(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/api/getAllPOS`,{ headers: this.headers });
  }
  public addUser(usertype, user ): Observable<User> {
    const userData = {
      name: user.name,
      userType: usertype,
      region: user.region,
      countryId:user.country,
      stateId:user.state,
      cityId:user.city,
      address:user.address,
      phoneNo:user.phoneNo,
      email:user.email,
      websiteURL:user.websiteURL,
      credit:user.credit}
    return this.http.post<User>(`${environment.apiUrl}/api/addUser`, userData, { headers: this.headers });
  }

  public getUserByID(id): Observable<User> {
    console.log(id);
    const newUser = { id: id };
    return this.data = this.http.get<User>(`${environment.apiUrl}/api/userDatum/`+id,{headers:this.headers});
  }
  public userUpdate(id, user): Observable<User> {
    const userData = {
      id: id,
      name: user.name,
      region: user.region,
      countryId: user.country,
      stateId: user.state,
      cityId: user.city,
      address: user.address,
      phoneNo: user.phoneNo,
      websiteURL: user.websiteURL,
      credit: user.credit,
    }
    console.log("user service", userData)
    return this.http.put<User>(`${environment.apiUrl}/api/updateUser`, userData, { headers: this.headers })
  }
  public userValue(id):Observable<User>{
    const newUser = {id:id};
    //console.log(id);
    this.data=this.http.post<User>(`${environment.apiUrl}/api/userValue`, newUser);
   //console.log(this.data);
    return this.data;
  }
  public deleteUser(id: number):Observable<User> {
    const delUser = { id: id }
    return this.http.post<User>(`${environment.apiUrl}/api/deleteUser`, delUser, { headers: this.headers });
  }
  public status(id: number): Observable<User> {
    const userId={id:id}
    return this.http.post<User>(`${environment.apiUrl}/api/userStatus`, userId, { headers: this.headers });
  }
  /*public deletePSP(id:number):Observable<User>
  {
    const newCustomer={
      id:id,

    };
     return this.http.post<User>(`${environment.apiUrl}/api/deletePSP`, newCustomer); 
    } */
}
