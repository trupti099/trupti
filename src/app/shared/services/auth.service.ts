import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of, BehaviorSubject, Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { map, retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public CLIENT_CODE:string;
  private currentUserSubject: BehaviorSubject<any>
  public FFCUser: Observable<any>
  constructor(private http: HttpClient, 
              private router: Router,
              ){
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('FFCUser')));
    this.FFCUser = this.currentUserSubject.asObservable();
  }
  headers = new HttpHeaders({
    'Content-Type': 'application/json,application/x-www-form-urlencoded; charset=UTF-8,application/octet-stream',
    'Authorization': localStorage.getItem('FFCUser')
  });
  accessToken :string="";
  public get currentUserValue(){
    return this.currentUserSubject.value;
  }
  login(clientCode:string,email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/login`, { clientCode, email, password })
    .pipe(map(user => {
      if (user.data && user.data.token) {
        localStorage.setItem('FFCUser', JSON.stringify(user.data))
        this.currentUserSubject.next(user.data);
        this.CLIENT_CODE=user.data.clientCode
      }
    }
    ))
    
  }
  logout() {
    localStorage.removeItem('FFCUser');
      this.currentUserSubject.next(null);
      window.location.href='#/login';

    return this.http.get<any>(`${environment.apiUrl}/api/logout`, { headers: this.headers });
  }
  isUserLoggedIn() {
    const token = JSON.parse(localStorage.getItem("FFCUser"))
    return token !== null;
  }
}