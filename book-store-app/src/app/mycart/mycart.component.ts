import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
   cartItems:any=[];
  constructor(private commonservice:CommonserviceService) { }

  ngOnInit(): void {
     this.cartItems = this.commonservice.mycart;
  }

}
