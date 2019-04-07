import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceprionistProductsEditComponent } from './receprionist-products-edit.component';

describe('ReceprionistProductsEditComponent', () => {
  let component: ReceprionistProductsEditComponent;
  let fixture: ComponentFixture<ReceprionistProductsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceprionistProductsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceprionistProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
