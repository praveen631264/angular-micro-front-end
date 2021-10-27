import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemMicroAppTwoComponent } from './add-item-micro-app-two.component';

describe('AddItemMicroAppTwoComponent', () => {
  let component: AddItemMicroAppTwoComponent;
  let fixture: ComponentFixture<AddItemMicroAppTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItemMicroAppTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemMicroAppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
