import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsReportComponent } from './parcels-report.component';

describe('ParcelsReportComponent', () => {
  let component: ParcelsReportComponent;
  let fixture: ComponentFixture<ParcelsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
