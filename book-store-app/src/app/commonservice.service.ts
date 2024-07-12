import { Injectable } from '@angular/core';
import {cartformat} from './carttemplate';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  private subject = new Subject<number>();
  subject$ = this.subject.asObservable();

  constructor() { }
  mycart : any = [];
  
  pushCartItems(cartObj:cartformat){
    this.mycart = cartObj
    this.subject.next(this.mycart.length);
  }
}
