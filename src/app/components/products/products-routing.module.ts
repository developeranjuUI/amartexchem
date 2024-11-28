import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ZdhcexportCertifiedComponent } from './zdhcexport-certified/zdhcexport-certified.component';
import { DomesticOrientedComponent } from './domestic-oriented/domestic-oriented.component';
import { AntistaticAgentsComponent } from './antistatic-agents/antistatic-agents.component';
import { DyeingAuxillariesComponent } from './dyeing-auxillaries/dyeing-auxillaries.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    // path: 'zdhcexport-certified/:zdhcProductId',
    path: 'zdhcexport-certified', // Path for ZdhcexportCertifiedComponent
    component: ZdhcexportCertifiedComponent
  },
  {
    // path: 'domestic-oriented/:domesticProductId',
    path: 'domestic-oriented', // Path for DomesticOrientedComponent
    component: DomesticOrientedComponent
  },
  {
    // path: 'antistatic-agents/:antisticProductId',
    path: 'antistatic-agents', // Path for AntistaticAgentsComponent
    component: AntistaticAgentsComponent
  },
  {
    // path: 'dyeing-auxillaries/:dyeingProductId', // use when calling dynamic
    path: 'dyeing-auxillaries', // Path for DyeingAuxillariesComponent
    component: DyeingAuxillariesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
