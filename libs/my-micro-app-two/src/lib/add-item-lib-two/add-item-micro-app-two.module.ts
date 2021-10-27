import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddItemMicroAppTwoRoutingModule } from './add-item-micro-app-two-routing.module';
import { AddItemMicroAppTwoComponent } from './add-item-micro-app-two.component';
import { MySharedLibModule } from '@angular-micro-front-end/my-shared-lib';

@NgModule({
  declarations: [AddItemMicroAppTwoComponent],
  imports: [CommonModule, AddItemMicroAppTwoRoutingModule, MySharedLibModule],
  exports: [AddItemMicroAppTwoComponent],
})
export class AddItemMicroTwoModule {}
