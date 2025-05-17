import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  standalone: false
})
export class ProductComponent implements OnInit{

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

  }

}
