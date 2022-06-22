import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Itgot added because the app module owns the product list compoent

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // local Directive or pipes are declred under declarations
  declarations: [
    AppComponent,
    ProductListComponent  // the component is declared here 
  ],
  // the pipes used from 3rd party/angular is used under import
  imports: [
    BrowserModule,
    FormsModule, //We need to add imports here in order to use it for the ng module decorator 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
