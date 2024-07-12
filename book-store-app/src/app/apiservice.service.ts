import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 url="http://localhost:3000/";
 resp:any;
  constructor(private httpclient:HttpClient) { }
  get(api:any){
    return this.httpclient.get(this.url+api);
    
}
  post(api:string,postdata:object):Observable<any>{
   return this.httpclient.post(this.url+api,postdata)
  }
  getarr(){
   var arr:any =[];
    return arr;
  }
}
