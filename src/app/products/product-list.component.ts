import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";


@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  //Style urls are array type so we need square brackets 
})
//The styles added to comopnent is applicaple to only componnets

//These are properties of the componet
export class ProductListComponent implements OnInit {
  pageTitle: String = 'List Of Products';
  imageWidth: number = 25;
  imagemargin: number = 25;
  showImage: boolean = false;
  // listFilter: string = 'Search Products';

  //declaring the list filter as string private which starts with _
  private _listFilter: string = ""

  //getter and sette rmethod is used in order to use these private members
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('in Setter', value);
  }

  products: IProduct[] = [{
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

  //this method is declred to use onInIt
  ngOnInit(): void {
    console.log('In OnInit')
  }
}