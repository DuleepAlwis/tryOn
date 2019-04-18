import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothEditComponent } from './cloth-edit.component';

describe('ClothEditComponent', () => {
  let component: ClothEditComponent;
  let fixture: ComponentFixture<ClothEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
