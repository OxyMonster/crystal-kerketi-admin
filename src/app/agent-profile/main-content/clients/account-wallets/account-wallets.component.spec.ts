import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWalletsComponent } from './account-wallets.component';

describe('AccountWalletsComponent', () => {
  let component: AccountWalletsComponent;
  let fixture: ComponentFixture<AccountWalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
