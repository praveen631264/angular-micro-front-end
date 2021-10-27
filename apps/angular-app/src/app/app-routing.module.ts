import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/micro-app-one',
    pathMatch: 'full',
  },
  {
    path: 'micro-app-one',
    loadChildren: () =>
      import('@angular-micro-front-end/my-micro-app-one').then(
        (mod) => mod.AddItemMicroAppOneModule
      ),
  },
  {
    path: 'micro-app-two',
    loadChildren: () =>
      import('@angular-micro-front-end/my-micro-app-two').then(
        (mod) => mod.AddItemMicroTwoModule
      ),
  },
  {
    path: 'my-cart',
    loadChildren: () =>
      import('@angular-micro-front-end/my-cart-micro-app').then(
        (mod) => mod.MyCartItemsModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
