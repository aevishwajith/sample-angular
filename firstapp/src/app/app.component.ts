import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  itemname="";
  myitem="";
  nameFromDemo="";
  submititem(){
   this.myitem=this.itemname;  
  }
  getname(name:string){
     this.nameFromDemo=name;
  }
}
