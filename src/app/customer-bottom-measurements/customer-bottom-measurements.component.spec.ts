import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBottomMeasurementsComponent } from './customer-bottom-measurements.component';

describe('CustomerBottomMeasurementsComponent', () => {
  let component: CustomerBottomMeasurementsComponent;
  let fixture: ComponentFixture<CustomerBottomMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBottomMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBottomMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
