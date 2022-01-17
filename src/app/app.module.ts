import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ProductListComponent } from './Components/order/product-list/product-list.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { DollarToEGPPipe } from './Pipes/dollar-to-egp.pipe';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { NewProductComponent } from './Components/Admin/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    DollarToEGPPipe,
    OrderMasterComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    UserLoginComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //PorductStaticService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
