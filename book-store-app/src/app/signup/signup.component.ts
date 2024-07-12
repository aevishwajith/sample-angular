import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:any;
  formsubmited=false;
  constructor(private httpclient:HttpClient,private apiservice:ApiserviceService) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      Email:new FormControl("",[Validators.required,Validators.email]),
      Password:new FormControl("",Validators.required),
      Name:new FormControl("",Validators.required)
  })
  }
  get f(){
    // console.log(this.signupform.controls)
    return this.signupform.controls;
  }
  formsubmit(data:any){
    console.log(data);
    var name=data.Name;
    var email=data.Email;
    var password=data.Password;
    var postdata={
      "name":name,
      "email":email,
      "password":password
    }
   this.formsubmited=true;
   if(name!="" && email!="" && password!=""){
    this.apiservice.post("signupuser",postdata).subscribe((res)=>{
      console.log(res);
      this.signupform.Name="";
      this.signupform.Email="";
      this.signupform.Password="";
    });
   /*this.httpclient.post("http://localhost:3000/signupuser",postdata).subscribe((res)=>{
    console.log(res);
   })*/
  }
  }
  reset(){
    this.signupform.reset();
  }

}
