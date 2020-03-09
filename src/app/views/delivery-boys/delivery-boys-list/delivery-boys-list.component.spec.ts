import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoysListComponent } from './delivery-boys-list.component';

describe('DeliveryBoysListComponent', () => {
  let component: DeliveryBoysListComponent;
  let fixture: ComponentFixture<DeliveryBoysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryBoysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBoysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
