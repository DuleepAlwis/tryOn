import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TightsFormComponent } from './tights-form.component';

describe('TightsFormComponent', () => {
  let component: TightsFormComponent;
  let fixture: ComponentFixture<TightsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TightsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TightsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
