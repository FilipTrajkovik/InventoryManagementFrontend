import {Injectable} from '@angular/core';
import {environment} from '../enviroment/enviroment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({providedIn: 'root'})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products`)
  }


}


