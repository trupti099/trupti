import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveUpdateService {
  subject= new Subject();
  constructor() { 
  }
  setUpdate(msg){
    this.subject.next(msg);
  }
  getUpdate(){
    return this.subject.asObservable();
  }
}
