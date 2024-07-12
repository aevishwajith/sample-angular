import { Component, OnInit,AfterViewInit,ElementRef,Renderer2, ViewChild, HostListener } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonserviceService } from '../commonservice.service';
import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit,AfterViewInit {
  @ViewChild('sidebar') sidebar! : ElementRef;
  @ViewChild('maincontent') maincontent!:ElementRef;
  pricerange:string="";
  height:number=0;
  mobileimages:any=[
    
    /*{"img":"assets/kitchenset/kitchenset_mixi1.jpeg","company":"Butterfly","price":"2000"},
    {"img":"assets/kitchenset/kitchenset_mixi2.jpeg","company":"Preethi","price":"2500"},
    {"img":"assets/kitchenset/kitchenset_plate1.jpeg","company":"Azon","price":"750"},
    {"img":"assets/kitchenset/kitchenset_stove1.jpeg","company":"Preethi","price":"1700"},*/
  ] ;
  constructor(private apiservice : ApiserviceService,private elementRef:ElementRef,private render: Renderer2,private commonservice:CommonserviceService,private userloginservice:UserloginService) { }
  
  ngOnInit(): void {
    this.getMobileItems();
   
    //this.renderer.setStyle(divElement, 'height', this.height);
   
  }
  ngAfterViewInit(): void {
    
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustSideBarHeight();
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
  getMobileItems(){
    
    this.mobileimages=[];
    this.apiservice.get("showitems?category=mobile").subscribe((res:any)=>{
      
      this.mobileimages=res.map((ele:any)=>{
        console.log("res---",ele);
        return {...ele,value: 1};
     })
     setTimeout(()=>{
      this.adjustSideBarHeight();
     },0)
    
  
    })
  
    //const divElement1 = this.elementRef.nativeElement.querySelector('#my-div1');
  //this.renderer.setStyle(divElement1, 'height', this.height+'px');

  }
  filteredItems(price:string){
    this.mobileimages=[];
    //console.log("price--",price);
    var postdata={
      "pricerange":price,
      "category":"mobile"
    };
    
    this.apiservice.post("filtertedItems",postdata).subscribe((res)=>{
      this.mobileimages=res.map((ele:any)=>{
        console.log("res---",ele);
        return {...ele,value: 1};
     })
      setTimeout(()=>{
        this.adjustSideBarHeight();
       },0)
    });
   
    //const divElement1 = this.elementRef.nativeElement.querySelector('#my-div1');
 // this.renderer.setStyle(divElement1, 'height', this.height+'px');
    

  }

  increaseqty(obj:any){
    this.mobileimages.forEach((element:any) => {
      if(element._id == obj._id){

        element.value = element.value+1;
      }
    });
   
 }
 decreaseqty(obj:any){
 

  this.mobileimages.forEach((element:any) => {
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
  //this.commonservice.pushCartItems(cartObj);
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
