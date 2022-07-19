import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { productService } from "./products.services"

@Component({
  // selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  //Style urls are array type so we need square brackets 
})
//The styles added to component is applicaple to only componnets

//These are properties of the componet
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: String = 'List Of Products';
  imageWidth: number = 25;
  imagemargin: number = 25;
  showImage: boolean = false;
  errorMsg: string = '';
  sub!: Subscription;
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

  products: IProduct[] = [];

  constructor(private productService: productService) { }

  // Methods are declared after properties
  // Methodname(): return type {Body} 
  toggleImage(): void {
    this.showImage = !this.showImage
  }

  //this method is declred to use onInIt
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProduct = this.products;
      },
      error: err => this.errorMsg = err
    });
    // Here we are suibscribing the ovserbale and we need to unsub later as well, subscribe takes 
    // observer object responsing to three notifications  

  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  // this to make sure the subscribe is active in order to unsub it



  // products is referrring to the array, the input parameter is the listFilter which is passed on
  //  as a parameter in the setter method for  which is a string
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().includes(filterBy))

    // this.products will return the whole list of array, we are using js array method 

    // The arrow method is processing each passed input product : products means product in each product , the body strats after => 
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }


}