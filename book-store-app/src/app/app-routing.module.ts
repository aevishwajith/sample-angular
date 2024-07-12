import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchensetComponent } from './kitchenset/kitchenset.component';
import { MycartComponent } from './mycart/mycart.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BooksComponent } from './books/books.component';
import {RedirectGuard} from './redirect.guard'
import { AuthenticateGuard } from './authenticate.guard';
const routes: Routes = [
 
 //{path:'house*',redirectTo:'Kitchenset',pathMatch:'full'},
 {path:'kitchenset',canActivate:[AuthenticateGuard],component:KitchensetComponent},
 {path:'cart',canActivate:[AuthenticateGuard],component:MycartComponent},
 {path:'mobiles',canActivate:[AuthenticateGuard],component:MobilesComponent},
 {path:'books',canActivate:[AuthenticateGuard],component:BooksComponent},
 {path:':word',canActivate:[RedirectGuard],component:KitchensetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
