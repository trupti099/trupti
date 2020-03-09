import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRaisedTicketsComponent } from './recent-raised-tickets.component';

describe('RecentRaisedTicketsComponent', () => {
  let component: RecentRaisedTicketsComponent;
  let fixture: ComponentFixture<RecentRaisedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentRaisedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentRaisedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
