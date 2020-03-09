import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagerListComponent } from './account-manager-list.component';

describe('AccountManagerListComponent', () => {
  let component: AccountManagerListComponent;
  let fixture: ComponentFixture<AccountManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
