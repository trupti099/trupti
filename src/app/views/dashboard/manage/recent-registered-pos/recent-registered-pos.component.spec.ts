import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRegisteredPosComponent } from './recent-registered-pos.component';

describe('RecentRegisteredPosComponent', () => {
  let component: RecentRegisteredPosComponent;
  let fixture: ComponentFixture<RecentRegisteredPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentRegisteredPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentRegisteredPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
