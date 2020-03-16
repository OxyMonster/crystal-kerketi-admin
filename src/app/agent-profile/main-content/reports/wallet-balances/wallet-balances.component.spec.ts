import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBalancesComponent } from './wallet-balances.component';

describe('WalletBalancesComponent', () => {
  let component: WalletBalancesComponent;
  let fixture: ComponentFixture<WalletBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
