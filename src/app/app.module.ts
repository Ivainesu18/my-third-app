import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


 
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderslistComponent } from './orders/orderslist/orderslist.component';
import { OrdersitemComponent } from './orders/orderslist/ordersitem/ordersitem.component';
import { OrdersdetailComponent } from './orders/ordersdetail/ordersdetail.component';
import { BillinglistComponent } from './billinglist/billinglist.component';
import { BillingeditComponent } from './billinglist/billingedit/billingedit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    OrderslistComponent,
    OrdersitemComponent,
    OrdersdetailComponent,
    BillinglistComponent,
    BillingeditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
