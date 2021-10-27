import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemMicroAppOneComponent } from './add-item-micro-app-one.component';

const routes: Routes = [
  {
    path: '',
    component: AddItemMicroAppOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMicroAppOneRoutingModule {}
