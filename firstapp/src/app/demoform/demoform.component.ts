import {  Input,Component, OnInit,Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator} from '@angular/forms';
import {NgbModal,ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.css']
})
export class DemoformComponent implements OnInit {
@Input() item="";
@Output() nameEvent= new EventEmitter<string>();
  myform :any;
   email : any;
   formsubmited=false;
   formdata={
     email:'',
     name:'',
     password:''
   };
   
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
    this.myform=new FormGroup({
      name: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      passwd: new FormControl("",[Validators.required,Validators.minLength(3)])


    });
  }
  get f(){
    return this.myform.controls;
  }
  formsubmit(content:any){
    this.formsubmited=true;
    if(!this.myform.valid){
      return;
    }
   this.formdata.email=this.myform.value.email;
   this.formdata.name=this.myform.value.name;
   this.formdata.password=this.myform.value.passwd;
   this.nameEvent.emit(this.myform.value.name);
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }

}
