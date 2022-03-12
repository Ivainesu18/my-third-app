import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingeditComponent } from './billingedit.component';

describe('BillingeditComponent', () => {
  let component: BillingeditComponent;
  let fixture: ComponentFixture<BillingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
