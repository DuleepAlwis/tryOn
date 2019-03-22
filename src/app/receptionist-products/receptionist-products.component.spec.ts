import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistProductsComponent } from './receptionist-products.component';

describe('ReceptionistProductsComponent', () => {
  let component: ReceptionistProductsComponent;
  let fixture: ComponentFixture<ReceptionistProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
