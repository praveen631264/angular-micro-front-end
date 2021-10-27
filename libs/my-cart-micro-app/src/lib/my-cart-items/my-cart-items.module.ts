import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MySharedLibModule } from '@angular-micro-front-end/my-shared-lib';
import { MyCartItemsRoutingModule } from './my-cart-items-routing.module';
import { MyCartItemsComponent } from './my-cart-items.component';
import { MyCartUtilsModule } from '@angular-micro-front-end/my-cart-utils';

@NgModule({
  declarations: [MyCartItemsComponent],
  imports: [
    CommonModule,
    MyCartItemsRoutingModule,
    MySharedLibModule,
    MyCartUtilsModule,
  ],
  exports: [MyCartItemsComponent],
})
export class MyCartItemsModule {}
