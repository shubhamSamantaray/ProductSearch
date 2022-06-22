import { Component } from "@angular/core";


@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html'
})

//These are properties of the componnet
export class ProductListComponent {
  pageTitle: String = 'List Of Products';
  imageWidth: number = 25;
  imagemargin: number = 25;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [{
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  }, {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2021",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "assets/images/saw.png"
  }];


  // Methods are declared after properties
  // Methodname(): return type {Body} 
  toggleImage(): void {
    this.showImage = !this.showImage
  }
}