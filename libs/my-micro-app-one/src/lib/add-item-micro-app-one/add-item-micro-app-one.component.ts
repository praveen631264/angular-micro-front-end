import { Item, ItemUtils } from '@angular-micro-front-end/my-shared-lib';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-micro-front-end-add-item-micro-app-one',
  templateUrl: './add-item-micro-app-one.component.html',
  styleUrls: ['./add-item-micro-app-one.component.scss'],
})
export class AddItemMicroAppOneComponent implements OnInit {
  items!: Item[];

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.items = ItemUtils.getByLibName('Micro App one');
  }
}
