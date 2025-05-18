import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {HttpErrorResponse} from '@angular/common/module.d-CnjH8Dlt';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  standalone: false
})
export class ProductListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'price', 'category', 'details', 'edit', 'delete'];
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService, private route: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (productList: Product[]) => {
        this.products = productList;
        this.dataSource = new MatTableDataSource<Product>(productList);
        this.dataSource.paginator = this.paginator;
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
