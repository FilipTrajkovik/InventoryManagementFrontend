import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {HttpErrorResponse} from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  standalone: false
})
export class ProductListComponent implements OnInit{
  tableColumnList: string[] = ['#', 'Name', 'Description', 'Price', 'Quantity', 'Category'];
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (productList: Product[]) => {
        this.products = productList;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
