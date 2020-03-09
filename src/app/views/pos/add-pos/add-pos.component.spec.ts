import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosComponent } from './add-pos.component';

describe('AddPosComponent', () => {
  let component: AddPosComponent;
  let fixture: ComponentFixture<AddPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
