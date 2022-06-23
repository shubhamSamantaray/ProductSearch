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
    this.filteredProduct = this.performFilter(value);
  }

  filteredProduct: IProduct[] = [];

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


  // products is referrring to the array, the input parameter is the listFilter which is passed on
  //  as a parameter in the setter method for  which is a string
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toUpperCase();
    return this.products.filter((product: IProduct) => product.productName.toUpperCase().includes(filterBy))

    // this.products will return the whole list of array, we are using js array method 

    // The arrow method is processing each passed input product : products means product in each product , the body strats after => 
  }

}