import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPspComponent } from './dashboard-psp.component';

describe('DashboardPspComponent', () => {
  let component: DashboardPspComponent;
  let fixture: ComponentFixture<DashboardPspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
