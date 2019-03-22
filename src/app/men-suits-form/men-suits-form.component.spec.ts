import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSuitsFormComponent } from './men-suits-form.component';

describe('MenSuitsFormComponent', () => {
  let component: MenSuitsFormComponent;
  let fixture: ComponentFixture<MenSuitsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenSuitsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenSuitsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
