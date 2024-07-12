import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.css']
})
export class NavloginComponent implements OnInit {
   currentuser:String=""
   
  constructor(private userloginserv:UserloginService) { }

  ngOnInit(): void {
    this.currentuser=this.userloginserv.getloginuser();
    console.log("user--"+this.currentuser)
  }
  

}
