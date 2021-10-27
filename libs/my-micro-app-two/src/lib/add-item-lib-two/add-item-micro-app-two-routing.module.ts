import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemMicroAppTwoComponent } from './add-item-micro-app-two.component';

const routes: Routes = [
  {
    path: '',
    component: AddItemMicroAppTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemMicroAppTwoRoutingModule {}
