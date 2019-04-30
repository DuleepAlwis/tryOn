import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistOrderComponent } from './receptionist-order.component';

describe('ReceptionistOrderComponent', () => {
  let component: ReceptionistOrderComponent;
  let fixture: ComponentFixture<ReceptionistOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
