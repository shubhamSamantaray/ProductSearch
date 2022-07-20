import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Itgot added because the app module owns the product list compoent
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
@NgModule({
  // local Directive or pipes are declred under declarations
  declarations: [
    AppComponent,
    WelcomeComponent, // the component is declared here 
  ],
  // the pipes used from 3rd party/angular is used under import
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      // the last one is a wild card one and the above one is default one
      //  Which is usually mentoioned as 404 page 
    ]),
    ProductModule,
    // The route values must be passed on.
    //We need to add imports here in order to use it for the ng module decorator 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
