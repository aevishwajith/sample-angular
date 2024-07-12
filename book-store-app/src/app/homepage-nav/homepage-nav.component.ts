import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { Subscription } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-homepage-nav',
  templateUrl: './homepage-nav.component.html',
  styleUrls: ['./homepage-nav.component.css']
})
export class HomepageNavComponent implements OnInit {
   currentuser:String="";
   offerpagevisible:boolean=true;
   searchitem:string="";
   cartcount:number=0;
   subscription!: Subscription;
  constructor(private userlogserv:UserloginService,private route:Router,private commonservice:CommonserviceService,private apiservice:ApiserviceService) { }

  ngOnInit(): void {
     this.currentuser=this.userlogserv.getloginuser();
     var userid = this.userlogserv.getloginuserid();
     console.log("myuserid--------",userid);
     this.apiservice.post('getCartItems',{userid:userid}).subscribe((cartitem)=>{
      //console.log("cartlen--",res);
      this.commonservice.pushCartItems(cartitem);
     })
     this.subscription=this.commonservice.subject$.subscribe(count=>{
        this.cartcount = count;
     });

  }
  reloadapp():void{
    window.location.reload();
  }
  mycart():void{
    this.route.navigateByUrl('/cart');
    this.offerpagevisible=false;
  }
  search(event:any):void{
   
      console.log('/'+event.target.value)
      this.route.navigateByUrl('/'+event.target.value);
      this.offerpagevisible=false;
      this.searchitem="";
    
  
  }
  searchclick():void{
    console.log(this.searchitem)
    this.route.navigateByUrl('/'+this.searchitem);
    this.offerpagevisible=false;
  }
  namefont():string{
    if(this.currentuser.length>10){
      return 'fs1';
    }else{
      return 'fs2';
    }
  }

}
