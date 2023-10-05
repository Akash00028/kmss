import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActiveProductComponent } from './product/list-active-product/list-active-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ListPendingProductComponent } from './product/list-pending-product/list-pending-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListPendindProductComponent } from './product/list-pendind-product/list-pendind-product.component';
import { SearchComponent } from './product/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListActiveProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    ListPendingProductComponent,
    ListPendindProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
