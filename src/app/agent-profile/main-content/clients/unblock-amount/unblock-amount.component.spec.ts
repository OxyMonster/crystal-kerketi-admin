import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockAmountComponent } from './unblock-amount.component';

describe('UnblockAmountComponent', () => {
  let component: UnblockAmountComponent;
  let fixture: ComponentFixture<UnblockAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnblockAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnblockAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
