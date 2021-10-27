import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemMicroAppOneComponent } from './add-item-micro-app-one.component';

describe('AddItemMicroAppOneComponent', () => {
  let component: AddItemMicroAppOneComponent;
  let fixture: ComponentFixture<AddItemMicroAppOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItemMicroAppOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemMicroAppOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
