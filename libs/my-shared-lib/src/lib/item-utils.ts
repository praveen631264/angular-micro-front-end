import { Item } from './item';
import * as _ from 'lodash';

export class ItemUtils {
  private static items: Item[] = [
    new Item('Backpack', 'laptop bag', "Lib 1"),
    new Item('Wallet', 'Men Wallet', "Lib 1"),
    new Item('Travel Bag', 'Travel bag', "Lib 1"),
    new Item('Monitor', 'Monitor', "Lib 2"),
    new Item('Keyboard', 'Dell Keyboard', "Lib 2"),
    new Item('Mouse', 'Hp Mouse', "Lib 2"),
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
