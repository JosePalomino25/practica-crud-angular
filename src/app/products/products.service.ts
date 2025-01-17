import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {CreateProductsComponent} from "./create-products/create-products.component";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl=  environment.apiURL;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getProducts():Observable<Product[]> {
    const endpoint = this.apiUrl + '/productos'
    return this.http.get<Product[]>(endpoint);
  }

  createProducts(product: Product): Observable<Product> {
    const endpoint = this.apiUrl + '/productos';
    return this.http.post<Product>(endpoint,product);
  }

  updateProduct(data: Product): Observable<Product> {
    const endpoint = this.apiUrl + '/productos/' + data.id;
    return this.http.put<Product>(endpoint, data);
  }

  deleteProduct(product:Product): Observable<any> {
    const endpoint = this.apiUrl + '/productos/' + product.id;
    return this.http.delete<Product>(endpoint);
  }

  openDialog(): void {
    this.dialog.open(CreateProductsComponent, {
      width: '250px',
    });
  }
}
