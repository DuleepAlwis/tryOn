import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistNavigationComponent } from './receptionist-navigation.component';

describe('ReceptionistNavigationComponent', () => {
  let component: ReceptionistNavigationComponent;
  let fixture: ComponentFixture<ReceptionistNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
