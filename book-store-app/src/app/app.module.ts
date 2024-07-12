import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImageslideComponent } from './imageslide/imageslide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavloginComponent } from './navlogin/navlogin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SiteopenComponent } from './siteopen/siteopen.component';
import { HomepageNavComponent } from './homepage-nav/homepage-nav.component';
import { MycartComponent } from './mycart/mycart.component';
import { OfferpageComponent } from './offerpage/offerpage.component';
import { KitchensetComponent } from './kitchenset/kitchenset.component';
import { BooksComponent } from './books/books.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ToysComponent } from './toys/toys.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ImageslideComponent,
    NavloginComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    SiteopenComponent,
    HomepageNavComponent,
    MycartComponent,
    OfferpageComponent,
    KitchensetComponent,
    BooksComponent,
    MobilesComponent,
    ToysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
