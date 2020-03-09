import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryboyComponent } from './add-deliveryboy.component';

describe('AddDeliveryboyComponent', () => {
  let component: AddDeliveryboyComponent;
  let fixture: ComponentFixture<AddDeliveryboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeliveryboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeliveryboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
