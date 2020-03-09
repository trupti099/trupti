import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRegisteredPspComponent } from './recent-registered-psp.component';

describe('RecentRegisteredPspComponent', () => {
  let component: RecentRegisteredPspComponent;
  let fixture: ComponentFixture<RecentRegisteredPspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentRegisteredPspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentRegisteredPspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
