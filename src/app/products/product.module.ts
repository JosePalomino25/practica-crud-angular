import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateProductsComponent} from "./create-products/create-products.component";
import {ListProductsComponent} from "./list-products/list-products.component";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CreateProductsComponent,
    ListProductsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    ListProductsComponent,
    CreateProductsComponent
  ]
})
export class ProductModule { }
