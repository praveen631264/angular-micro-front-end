import { MyCart, MyCartUtils } from '@angular-micro-front-end/my-cart-utils';
import { ItemUtils } from '@angular-micro-front-end/my-shared-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-micro-front-end-my-items',
  templateUrl: './my-cart-items.component.html',
  styleUrls: ['./my-cart-items.component.scss'],
})
export class MyCartItemsComponent {
  myCartItems: MyCart[] = [];

  constructor() {
    this.myCartItems = MyCartUtils.getMyCart(ItemUtils.getSelectedItem());
  }
}
