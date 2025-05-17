import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
  standalone: false
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      price: [0, [Validators.required, Validators.min(0)]],
      quantityInStock: [0, [Validators.required, Validators.min(0)]],
      category: [""],
    })
  }

  submitForm(): void {
    console.log(this.productForm.getRawValue())
    let productToAdd = this.productForm.getRawValue();

    if (this.productForm.valid) {
      this.productService.addProduct(productToAdd).subscribe(
        () => {

        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        },
        () => {
          this.router.navigate(['/products']);
        }
      );
    }
  }
}
