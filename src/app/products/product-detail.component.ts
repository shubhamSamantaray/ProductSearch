import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'pm-product-detail',
  //the selector is only required when a component isnested inside another comp
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  constructor() { }

  ngOnInit(): void {
  }

}
