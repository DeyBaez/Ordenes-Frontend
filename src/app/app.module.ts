import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientRegisterComponent } from './components/client/client-register/client-register.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductRegisterComponent } from './components/product/product-register/product-register.component';
import { OrderListComponent } from './components/order/order-list/order-list.component'
import { FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { OrderRegisterComponent } from './components/order/order-register/order-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientRegisterComponent,
    ProductListComponent,
    ProductRegisterComponent,
    OrderListComponent,
    ProductUpdateComponent,
    OrderRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
