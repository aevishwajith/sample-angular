import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
 currentuser:String="";
 currentUserId:string="";
  constructor() {}
  putloginuser(user:String,userid:string){
    this.currentuser=user;
    this.currentUserId=userid;
  }
  getloginuser(){
    return this.currentuser;
  }
  getloginuserid(){
    return this.currentUserId;
  }
}
