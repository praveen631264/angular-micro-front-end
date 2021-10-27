import { Item } from './item';
import * as _ from 'lodash';

export class ItemUtils {
  private static items: Item[] = [
    new Item('Backpack', 'laptop bag', "Micro App one"),
    new Item('Wallet', 'Men Wallet', "Micro App one"),
    new Item('Travel Bag', 'Travel bag', "Micro App one"),
    new Item('Monitor', 'Monitor', "Micro App two"),
    new Item('Keyboard', 'Dell Keyboard', "Micro App two"),
    new Item('Mouse', 'Hp Mouse', "Micro App two"),
  ];
  
  private static mySelectedItems: Item[] = [];

  private static groupByLibs = _.groupBy(ItemUtils.items, 'libName');

  public static getByLibName(libName: string){
    return ItemUtils.groupByLibs[libName] || [];
  }

  public static getItems(): Item[] {
    return ItemUtils.items;
  }

  public static addSelectedItem(item: Item  ) {
   // item.libName = libName;
    ItemUtils.mySelectedItems.push(item);
  }

  public static getSelectedItem() {
    return ItemUtils.mySelectedItems;
  }
}
