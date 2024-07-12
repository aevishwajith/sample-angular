import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newList="";
  newListToPush="";
  listArr : any=[];
  constructor() { }

  ngOnInit(): void {
  }
  addList(){
    this.newListToPush=this.newList;
    this.listArr.push(this.newListToPush);
    console.log('listArr',this.listArr);
    this.newList="";
  }
  deletelist(item:any,index:any){
    this.listArr.splice(index,1);

    console.log(this.listArr);
  }

}
