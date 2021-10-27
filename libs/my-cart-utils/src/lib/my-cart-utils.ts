import { Item } from '@angular-micro-front-end/my-shared-lib'
import * as _ from 'lodash';
import { MyCart } from './my-cart';

export class MyCartUtils {


  public static getMyCart(items: Item[]) {
    const groupBy = _.groupBy(items, 'name');
    const carts : MyCart[] = [];
    _.forOwn(groupBy, function(value) { 
        carts.push(new MyCart(value[0], value.length));
    } );
    return carts;
  }
}
