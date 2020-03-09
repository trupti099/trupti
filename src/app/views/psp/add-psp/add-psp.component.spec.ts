import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPspComponent } from './add-psp.component';

describe('AddPspComponent', () => {
  let component: AddPspComponent;
  let fixture: ComponentFixture<AddPspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
