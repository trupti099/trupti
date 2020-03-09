import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../../models/location/state';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private http:HttpClient) { }

  addState(name:string,countryId:number):Observable<State>{
    const  newState=new State(name,countryId);
    return this.http.post<State>(`${environment.apiUrl}/api/addState`,newState);
  }
  getStateData(id:number):Observable<State[]>{
    const newId = { id: id }
    return this.http.post<State[]>(`${environment.apiUrl}/api/getState`,newId);
  }
  deleteState(id):Observable<State>{
    const delState = {
      id: id
    }
    return this.http.post<State>(`${environment.apiUrl}/api/deleteState`,delState);
  }
}
