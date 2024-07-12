import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoformComponent } from './demoform/demoform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoformComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NgbModule,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
