import { Component } from "@angular/core";


@Component({
  selector: 'pm-root',
  template: ` 
  <div><h1>{{pageTitle}}</h1>
  <pm-product></pm-product> 
  <!-- The selector pm-product is used as a directive which hekps to add multiple templates -->
  </div>`

})

export class AppComponent {
  pageTitle: String = 'Product Demo';
}