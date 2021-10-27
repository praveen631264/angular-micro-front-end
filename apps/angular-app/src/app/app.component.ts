import { Component, OnInit } from '@angular/core';
import { IMenu } from './menu/menu.component';

@Component({
  selector: 'angular-micro-front-end-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  menus: IMenu[] = [];

  ngOnInit(): void {
    this.menus = [
      { path: '/micro-app-one', name: 'Micro App One' } as IMenu,
      { path: '/micro-app-two', name: 'Micro App Two' } as IMenu,
      { path: '/my-cart', name: 'My Cart' } as IMenu,
    ];
  }
}
