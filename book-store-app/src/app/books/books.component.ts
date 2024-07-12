import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonserviceService } from '../commonservice.service';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild('sidebar') sidebar! : ElementRef;
  @ViewChild('maincontent') maincontent!:ElementRef;
  bookimages : any =[];
  pricerange:string="";

  constructor(private apiservice : ApiserviceService,private render:Renderer2,private commonservice:CommonserviceService,private userloginservice:UserloginService) { }

  ngOnInit(): void {
    this.getBookItems();
  }
  adjustSideBarHeight(){
    const maincontentHeight = this.maincontent.nativeElement.offsetHeight;
    console.log("maincontentHeight---",maincontentHeight)
    if(maincontentHeight>424){
       this.render.setStyle(this.sidebar.nativeElement,'height',maincontentHeight+'px');
    }else{
      this.render.setStyle(this.sidebar.nativeElement,'height','425px');
    }
  }
  
  getBookItems(){
    
    this.bookimages=[];
    this.apiservice.get("showitems?category=books").subscribe((res:any)=>{
      
      this.bookimages=res.map((ele:any)=>{
        return {...ele,value: 1};
     })
     setTimeout(()=>{
      this.adjustSideBarHeight();
     },0)
    
    })
    //this.adjustSideBarHeight();
    
  }

  filteredItems(price:string){
    
    this.bookimages=[];
    console.log("price--",price);
    var postdata={
      "pricerange":price,
      "category":"books"
    };
    
    this.apiservice.post("filtertedItems",postdata).subscribe((res)=>{
      this.bookimages=res.map((ele:any)=>{
        return {...ele,value: 1};
     })
      setTimeout(()=>{
        this.adjustSideBarHeight();
       },0)
    });
    
    
  }

  increaseqty(obj:any){
    this.bookimages.forEach((element:any) => {
      if(element._id == obj._id){
        element.value = element.value+1;
      }
    });
   
 }
 decreaseqty(obj:any){
 

  this.bookimages.forEach((element:any) => {
    if(element._id == obj._id){
      if(element.value<=1){
        
        element.value = 1
      }else{
        element.value = element.value-1;
      }
    }
  });
 }
 addToCart(cartObj:any){
  const userid = this.userloginservice.currentUserId;
  var postdata:any={};
  postdata.category = cartObj.category;
  postdata.company = cartObj.company;
  postdata.img = cartObj.img;
  postdata.price = cartObj.price;
  postdata.value = cartObj.value;
  postdata.itemid = cartObj["_id"];
  postdata.userid = userid;
  this.apiservice.post('addcartItems',postdata).subscribe((cartitemarr)=>{
    
    this.commonservice.pushCartItems(cartitemarr);
  });
  console.log("cartObj--",cartObj)
 }
 
}
