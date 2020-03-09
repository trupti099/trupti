import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PspListComponent } from './psp-list.component';

describe('PspListComponent', () => {
  let component: PspListComponent;
  let fixture: ComponentFixture<PspListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PspListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PspListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
