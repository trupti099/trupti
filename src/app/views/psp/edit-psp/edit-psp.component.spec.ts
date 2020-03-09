import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPspComponent } from './edit-psp.component';

describe('EditPspComponent', () => {
  let component: EditPspComponent;
  let fixture: ComponentFixture<EditPspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
