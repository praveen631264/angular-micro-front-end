import { Component, Input } from '@angular/core';

export interface IMenu {
  path: string;
  name: string;
}

@Component({
  selector: 'angular-micro-front-end-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  _menus: IMenu[] = [];

  @Input()
  set menus(menu: IMenu[]) {
    this._menus = menu;
  }
}
