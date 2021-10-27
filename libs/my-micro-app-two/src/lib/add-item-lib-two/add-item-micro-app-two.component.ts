import { Item, ItemUtils } from '@angular-micro-front-end/my-shared-lib';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-micro-front-end-add-item-lib-two',
  templateUrl: './add-item-micro-app-two.component.html',
  styleUrls: ['./add-item-micro-app-two.component.scss'],
})
export class AddItemMicroAppTwoComponent implements OnInit {
  items!: Item[];

  ngOnInit(): void {
    this.items = ItemUtils.getByLibName('Lib 2');
  }
}
