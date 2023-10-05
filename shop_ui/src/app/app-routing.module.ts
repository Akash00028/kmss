import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActiveProductComponent } from './product/list-active-product/list-active-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ListPendindProductComponent } from './product/list-pendind-product/list-pendind-product.component';
import { SearchComponent } from './product/search/search.component';

const routes: Routes = [
  {path:'product-list',component:ListActiveProductComponent},
  {path:'', redirectTo:'product-list',pathMatch:'full'},
  {path : 'add-product' , component:AddProductComponent},
  {path : 'update-product/:id', component:UpdateProductComponent},
  {path : 'pending-list', component : ListPendindProductComponent},
  {path : 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
