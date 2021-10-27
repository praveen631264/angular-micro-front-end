import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddItemMicroAppOneComponent } from './add-item-micro-app-one.component';
import { AddMicroAppOneRoutingModule } from './add-item-micro-app-one-routing.module';
import { MySharedLibModule } from '@angular-micro-front-end/my-shared-lib';

@NgModule({
  declarations: [ AddItemMicroAppOneComponent ],
  imports: [CommonModule, AddMicroAppOneRoutingModule, MySharedLibModule],
  exports: [AddItemMicroAppOneComponent],
})
export class AddItemMicroAppOneModule {}
