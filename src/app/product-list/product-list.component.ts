import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {HttpErrorResponse} from '@angular/common/module.d-CnjH8Dlt';
import {Router} from '@angular/router';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  standalone: false
})
export class ProductListComponent implements OnInit{
  tableColumnList: string[] = ['#', 'Name', 'Price', 'Category'];
  products: Product[] = [];

  constructor(private productService: ProductService, private route: Router) {
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

  editProduct(id: number) {
    this.route.navigate([`/product-edit/${id}`]);
  }

  productDetails(id: number) {
    this.route.navigate([`/product-details/${id}`]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      {
        error: err => {
          alert(err.message());
        }
      }
    )
  }
}
