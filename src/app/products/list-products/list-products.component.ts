import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products!: Product[];
  columns: string[] = ['id', 'nombre', 'precio', 'actions'];


  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  createProduct() {
    this.productsService.openDialog();
  }

  updateProduct() {

  }

  deleteProduct(products: Product) {
    this.productsService.deleteProduct(products).subscribe(() => {
    });
  }


}







