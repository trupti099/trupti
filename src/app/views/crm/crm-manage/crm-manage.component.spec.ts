import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmManageComponent } from './crm-manage.component';

describe('CrmManageComponent', () => {
  let component: CrmManageComponent;
  let fixture: ComponentFixture<CrmManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
