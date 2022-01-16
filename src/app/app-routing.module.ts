import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';
import { ProductListComponent } from './Components/order/product-list/product-list.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

const routes: Routes = [ //First match wins strategy
  {path:'', redirectTo:'/Home', pathMatch: 'full'}, //Default path
  {path:'Home', component:HomeComponent},
  {path:'Product', component:ProductListComponent},
  {path:'Product/:pid', component:ProductDetailsComponent},
  {path:'Order', component:OrderMasterComponent},
  {path:'Login', component:UserLoginComponent},
  {path:"**", component:NotFoundComponent} //Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
