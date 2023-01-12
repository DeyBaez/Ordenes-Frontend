import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientRegisterComponent } from './components/client/client-register/client-register.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderRegisterComponent } from './components/order/order-register/order-register.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductRegisterComponent } from './components/product/product-register/product-register.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [
  {path: 'client-list', component: ClientListComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'order-list', component: OrderListComponent},
  {path:'', redirectTo:'client-list', pathMatch:'full'},

  {path: 'client-register', component: ClientRegisterComponent},
  {path: 'product-register', component: ProductRegisterComponent},
  {path: 'order-register', component: OrderRegisterComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
