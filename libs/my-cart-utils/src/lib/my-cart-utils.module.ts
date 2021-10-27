import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MySharedLibModule} from '@angular-micro-front-end/my-shared-lib'

@NgModule({
  imports: [CommonModule, MySharedLibModule],
})
export class MyCartUtilsModule {}
