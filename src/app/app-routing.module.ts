import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './Components/Admin/new-product/new-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/Layout/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';
import { ProductListComponent } from './Components/order/product-list/product-list.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';

const routes: Routes = [ //First match wins strategy
  {path:'Login', component:UserLoginComponent},
  {path:'Register', component:UserRegistrationComponent},
  // Child routes
  {path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo:'/Home', pathMatch: 'full'}, //Default path
    {path:'Home', component:HomeComponent},
    {path:'Product', component:ProductListComponent},
    {path:'Product/:pid', component:ProductDetailsComponent},
    {path:'Order', component:OrderMasterComponent},
    {path: 'AddProduct', component:NewProductComponent},
    {
      path: 'User', 
      loadChildren: () => import('src/app/Components/user/user.module')
                      .then(m => m.UserModule)
    },
  ]},
  {path:"**", component:NotFoundComponent} //Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
