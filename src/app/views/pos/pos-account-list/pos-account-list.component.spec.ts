import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAccountListComponent } from './pos-account-list.component';

describe('PosAccountListComponent', () => {
  let component: PosAccountListComponent;
  let fixture: ComponentFixture<PosAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
