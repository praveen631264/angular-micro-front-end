import { Item } from "@angular-micro-front-end/my-shared-lib";

export class MyCart {
  
  public item: Item;
  public quantity: number;
  

  constructor(item: Item, quantity: number) {
    this.item = item;
    this.quantity = quantity;
  }

  public getItem(): Item {
    return this.item;
  }

  public setItem(item: Item): void {
    this.item = item;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
