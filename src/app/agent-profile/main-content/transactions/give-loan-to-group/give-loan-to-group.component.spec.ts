import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveLoanToGroupComponent } from './give-loan-to-group.component';

describe('GiveLoanToGroupComponent', () => {
  let component: GiveLoanToGroupComponent;
  let fixture: ComponentFixture<GiveLoanToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveLoanToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveLoanToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
