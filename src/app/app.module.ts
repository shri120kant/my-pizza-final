import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza/pizza-detail/pizza-detail.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { CartComponent } from './cart/cart.component';
;

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailComponent,
    PizzaDeleteComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
