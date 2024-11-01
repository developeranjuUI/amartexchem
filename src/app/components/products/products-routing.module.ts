import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZdhcexportCertifiedComponent } from './zdhcexport-certified/zdhcexport-certified.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: ':zdhccetifiedId',
    component: ZdhcexportCertifiedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
