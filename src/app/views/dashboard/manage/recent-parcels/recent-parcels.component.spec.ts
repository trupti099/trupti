import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentParcelsComponent } from './recent-parcels.component';

describe('RecentParcelsComponent', () => {
  let component: RecentParcelsComponent;
  let fixture: ComponentFixture<RecentParcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentParcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
