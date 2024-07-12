import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import { UserloginService } from '../userlogin.service';


@Component({
  selector: 'app-imageslide',
  templateUrl: './imageslide.component.html',
  styleUrls: ['./imageslide.component.css']
})
export class ImageslideComponent implements OnInit {
  currentuser:String="";
images:any=[
  /*{img:"assets/mob1.jpg",desc:"Redmi Mobile 8A-2GB RAM-16GB Strorage-8mp rear and back"},
  {img:"assets/home1.jpg",desc:"Kitchen set-juicer-4plates-Stove-Pan"},
  {img:"assets/mob2.jpg",desc:"Redmi Mobile 9A-2GB RAM-16GB Strorage-8mp rear and back"},
  {img:"assets/mob1.jpg",desc:"Redmi Mobile Note 8A-2GB RAM-16GB Strorage-8mp rear and back"},
  {img:"assets/book1.jpg",desc:"Books-ponniyin selvan"},
  {img:"assets/book1.jpg",desc:"Orgin of shiva"},
  {img:"assets/book1.jpg",desc:"Books-ponniyin selvan"},
  {img:"assets/book1.jpg",desc:"Books-ponniyin selvan"}*/
 
  
] ;

  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };
  
  constructor(private httpclient:HttpClient,private apiservice:ApiserviceService,private userloginserv:UserloginService) {
  
   }

  ngOnInit(): void {
   this.currentuser=this.userloginserv.getloginuser(); 
  this.getImage();
  }

  getImage(){
    
    
     this.apiservice.get("offerimages").subscribe((res)=>{
      this.images=res
     })
   
     
    /*this.httpclient.get('http://localhost:3000/offerimages').subscribe((res)=>{
       this.images=res;
    })*/
  }

}
