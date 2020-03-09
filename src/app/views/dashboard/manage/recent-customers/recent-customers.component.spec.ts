import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCustomersComponent } from './recent-customers.component';

describe('RecentCustomersComponent', () => {
  let component: RecentCustomersComponent;
  let fixture: ComponentFixture<RecentCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
