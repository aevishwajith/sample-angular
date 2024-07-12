import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store-app';
  show:boolean=true;
  selectedTab:string="";
  homepage:boolean=false
  userloginfun(status:boolean){
    this.show=status;
    this.homepage=true;
  }
  
}
