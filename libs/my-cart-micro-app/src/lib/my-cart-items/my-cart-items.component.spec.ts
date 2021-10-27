import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartItemsComponent } from './my-cart-items.component';

describe('MyCartItemsComponent', () => {
  let component: MyCartItemsComponent;
  let fixture: ComponentFixture<MyCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCartItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
