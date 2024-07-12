import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-siteopen',
  templateUrl: './siteopen.component.html',
  styleUrls: ['./siteopen.component.css']
})
export class SiteopenComponent implements OnInit {
  imgshow:boolean=true;
   signshow:boolean=false;
   logshow:boolean=false;
   @Output() userlogin = new EventEmitter<boolean>();
   activatedloginbg="black";
   activatedsignupbg="black";
   logincursor:any={
    "width":"0px",
    "height":"0px",
    "border-left":"10px solid white",
    "border-right":"10px solid white",
    "border-top":"10px solid black",
    "border-bottom":"10px solid white",
    "display":"none",
    "position":"relative",
    "left":"13.5%",
   
    }
    signupcursor:any={
      "width": "0px",
      "height": "0px",
      "borderLeft": "10px solid white",
      "borderRight": "10px solid white",
      "borderTop": "10px solid black",
      "borderBottom": "10px solid white",
      "display": "none",
      "position": "relative",
      "left": "19%",
      "visibility":"none"
    }
  constructor() { }
  selectedTab:any;
  ngOnInit(): void {
  }
  login():void{
    this.selectedTab = 'login';
    this.logshow=true;
    this.imgshow=false;
    this.signshow=false;
    this.activatedloginbg ="grey";
    this.activatedsignupbg="black";
    this.logincursor={
      "width":"0px",
      "height":"0px",
      "border-left":"10px solid white",
      "border-right":"10px solid white",
      "border-top":"10px solid grey",
      "border-bottom":"10px solid white",
      "display":"inline-block",
      "position":"relative",
      "left":"13.5%"
     
      }
      this. signupcursor={
        "width": "0px",
        "height": "0px",
        "borderLeft": "10px solid white",
        "borderRight": "10px solid white",
        "borderTop": "10px solid grey",
        "borderBottom": "10px solid white",
        "display": "none",
        "position": "relative",
        "left": "19%"
      }
  }
  signup():void{
    this.selectedTab = 'signup';
    this.logshow=false;
    this.imgshow=false;
    this.signshow=true;
    this.activatedloginbg ="black";
    this.activatedsignupbg="grey";
    this.logincursor={
      "width":"0px",
      "height":"0px",
      "border-left":"10px solid white",
      "border-right":"10px solid white",
      "border-top":"10px solid black",
      "border-bottom":"10px solid white",
      "display":"none",
      "position":"relative",
      "left":"13.5%"
     
      }
      this. signupcursor={
        "width": "0px",
        "height": "0px",
        "borderLeft": "10px solid white",
        "borderRight": "10px solid white",
        "borderTop": "10px solid grey",
        "borderBottom": "10px solid white",
        "display": "inline-block",
        "position": "relative",
        "left": "20%",
        
      }
  }
  userloginfunc(status:boolean){
    this.userlogin.emit(status)
    
  }

}
