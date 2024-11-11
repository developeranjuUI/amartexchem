import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ZdhcexportCertifiedComponent } from './zdhcexport-certified/zdhcexport-certified.component';
import { DomesticOrientedComponent } from './domestic-oriented/domestic-oriented.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'zdhcexport-certified/:zdhcProductId', // Path for ZdhcexportCertifiedComponent
    component: ZdhcexportCertifiedComponent
  },
  {
    path: 'domestic-oriented/:domesticProductId', // Path for DomesticOrientedComponent
    component: DomesticOrientedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
