import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonserviceService } from '../commonservice.service';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-kitchenset',
  templateUrl: './kitchenset.component.html',
  styleUrls: ['./kitchenset.component.css']
})
export class KitchensetComponent implements OnInit,AfterViewInit,AfterViewChecked {
  @ViewChild('sidebar') sidebar! : ElementRef;
  @ViewChild('maincontent') maincontent!:ElementRef;
  kitchenimages:any=[
    
    /*{"img":"assets/kitchenset/kitchenset_mixi1.jpeg","company":"Butterfly","price":"2000"},
    {"img":"assets/kitchenset/kitchenset_mixi2.jpeg","company":"Preethi","price":"2500"},
    {"img":"assets/kitchenset/kitchenset_plate1.jpeg","company":"Azon","price":"750"},
    {"img":"assets/kitchenset/kitchenset_stove1.jpeg","company":"Preethi","price":"1700"},*/
  ] ;
  pricerange:string="";
  quantity:number=1
  constructor(private apiservice : ApiserviceService,private render:Renderer2,private commonservice:CommonserviceService,private userloginservice:UserloginService) { }

  ngOnInit(): void {
    this.getKitchenItems();
    
  }
  ngAfterViewInit(): void {
    //this.adjustSideBarHeight();
  }
  ngAfterViewChecked(): void {
     //this.adjustSideBarHeight();
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
  getKitchenItems(){
    
    this.kitchenimages=[];
    this.apiservice.get("showitems?category=kitchen").subscribe((res:any)=>{
      
      this.kitchenimages=res.map((ele:any)=>{
        console.log("res---",ele);
        return {...ele,value: 1};
     })
     
     //this.kitchenimages = res
      
     setTimeout(()=>{
      this.adjustSideBarHeight();
     },0)
    
    })
    //this.adjustSideBarHeight();
    
  }
  filteredItems(price:string){
    
    this.kitchenimages=[];
    console.log("price--",price);
    var postdata={
      "pricerange":price,
      "category":"kitchen"
    };
    
    this.apiservice.post("filtertedItems",postdata).subscribe((res)=>{
      //this.kitchenimages=res;
      this.kitchenimages=res.map((ele:any)=>{
        return {...ele,value: 1};
      })
      setTimeout(()=>{
        this.adjustSideBarHeight();
       },0)
    });
    const maincontentHeight2 = this.maincontent.nativeElement.offsetHeight;
    //console.log("maincontentHeight2---",maincontentHeight2)
    
  }
  increaseqty(obj:any){
    this.kitchenimages.forEach((element:any) => {

      if(element._id == obj._id){

        element.value = element.value+1;
      }
    });
  }
 decreaseqty(obj:any){
 

  this.kitchenimages.forEach((element:any) => {
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
