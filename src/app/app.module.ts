import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Itgot added because the app module owns the product list compoent
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // local Directive or pipes are declred under declarations
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent  // the component is declared here 
  ],
  // the pipes used from 3rd party/angular is used under import
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      // the last one is a wild card one and the above one is default one
      //  Which is usually mentoioned as 404 page 
    ])
    // The route values must be passed on.
    //We need to add imports here in order to use it for the ng module decorator 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
