import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Customer } from '../models/customer';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  subject : Subject<any>=new Subject<any>();
  observable:Observable<any>=this.subject.asObservable();
  
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json,application/x-www-form-urlencoded; charset=UTF-8,application/octet-stream',
    'Authorization': localStorage.getItem('FFCUser')
  });
  addCustomer(userType,customer): Observable<Customer> {
    const newCustomer = {
      name: customer.name,
      type: userType,
      countryId: customer.country,
      stateId: customer.state,
      cityId: customer.city,
      address: customer.address,
      phoneNo: customer.phoneNo,
      email: customer.email,
      password: customer.password
    }
    return this.http.post<Customer>(`${environment.apiUrl}/api/addCustomer`, newCustomer,{headers:this.headers});
  }  

  // getCustomerData(): Observable<Customer> {
  //   return this.http.get<Customer>(`${environment.apiUrl}/api/getCustomers`, { headers: this.headers });
  // }


  public getCustomersBasedPhoneNo(no): Observable<Customer> {
    const newNumber = { phoneNo: no };
    return this.http.post<Customer>(`${environment.apiUrl}/api/getCustomersBasedPhoneNo`, newNumber, { headers: this.headers })
    .pipe(retry(1), catchError(this.handleError));
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Customer, any> {
    throw new Error("Method not implemented.");
  }
}
