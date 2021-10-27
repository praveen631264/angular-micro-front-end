import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCartItemsComponent } from './my-cart-items.component';

const routes: Routes = [
  {
    path: '',
    component: MyCartItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCartItemsRoutingModule {}
