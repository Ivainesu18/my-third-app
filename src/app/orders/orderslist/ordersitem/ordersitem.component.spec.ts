import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersitemComponent } from './ordersitem.component';

describe('OrdersitemComponent', () => {
  let component: OrdersitemComponent;
  let fixture: ComponentFixture<OrdersitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
