import { Component, EventEmitter, OnInit,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userlogin = new EventEmitter<boolean>();
 formsubmited=false;
 loginform:any;
 notreset:boolean=true;
 loginfail:boolean=false;
  
  constructor(private httpclient:HttpClient,private route:Router,private apiservice:ApiserviceService,private userloginserv:UserloginService) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
        Email:new FormControl("",[Validators.required,Validators.email]),
        Password:new FormControl("",Validators.required)
    })
  }
  get f(){
    return this.loginform.controls;
  }
  formsubmit(data:any){
    console.log(data);
    var email=data.Email;
    var password=data.Password;
   
   this.formsubmited=true;
  
 console.log("email",this.loginform.get('Email')?.value);
 var postdata={
  "email":email,
  "password":password
 }
 if(email!="" && password!=""){
  console.log("innn");
  this.notreset=false;
 this.loginform.reset();
 this.apiservice.post("loginuser",postdata).subscribe((res)=>{
  if(res.status=="success"){
   console.log("LOGIN SUCCESS");
   console.log("res--",res)
   this.userloginserv.putloginuser(res.user,res.userid);
   this.userlogin.emit(false);
   console.log(this.userloginserv.getloginuser());
   //this.route.navigateByUrl('/homepage');

  }else{
    this.loginfail=true;
    console.log("LOGIN FAIL");
    this.route;
  }
 });

 }
  }
}
