import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-offerpage',
  templateUrl: './offerpage.component.html',
  styleUrls: ['./offerpage.component.css']
})
export class OfferpageComponent implements OnInit {
  images:any=[] ;

  constructor(private apiservice:ApiserviceService) { }

  ngOnInit(): void {
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
