import { Component } from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent {

  newProducts:Product = {
      id:undefined,
      nombre: '',
      precio: 0
  }

  constructor(private productService:ProductsService) { }

  /*updateProduct(){
    const productUpdate:Product = {id: 3, nombre:'Producto Actualizado', precio:'3500'}
    this.productService.updateProduct(productUpdate).subscribe()
  }
*/

  newProduct(){
    this.productService.createProducts(this.newProducts).subscribe((newProduct:Product) => {
      this.newProducts={
        id:newProduct.id,
        nombre:'',
        precio:0,
      };
    })
  }

}
