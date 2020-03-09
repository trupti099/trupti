import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryboyComponent } from './edit-deliveryboy.component';

describe('EditDeliveryboyComponent', () => {
  let component: EditDeliveryboyComponent;
  let fixture: ComponentFixture<EditDeliveryboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeliveryboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
