import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { ItemUtils } from '../item-utils';

@Component({
  selector: 'angular-micro-front-end-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
 

  @Input()
  items !: Item[];

  showMessage = "";


  public addItem(data: Item) {
    const item: Item = new Item(data.name, data.description, data.libName);
    //ItemUtils.addSelectedItem(item, "Micro App two");  
    ItemUtils.addSelectedItem(item);
    this.showMessage = "Item "+item.name+" added to cart";
  }

}
