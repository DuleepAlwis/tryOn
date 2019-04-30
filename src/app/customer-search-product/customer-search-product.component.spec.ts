import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchProductComponent } from './customer-search-product.component';

describe('CustomerSearchProductComponent', () => {
  let component: CustomerSearchProductComponent;
  let fixture: ComponentFixture<CustomerSearchProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSearchProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
