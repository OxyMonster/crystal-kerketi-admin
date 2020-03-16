import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentProfileComponent } from './agent-profile.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CompanyLogosComponent } from './top-navigation/company-logos/company-logos.component';
import { CurrencyComponent } from './top-navigation/currency/currency.component';
import { ClientNavigationComponent } from './left-navigation/client-navigation/client-navigation.component';
import { AgentNavigationComponent } from './left-navigation/agent-navigation/agent-navigation.component';
import { ReportsNavigationComponent } from './left-navigation/reports-navigation/reports-navigation.component';
import { TransactionsNavigationComponent } from './left-navigation/transactions-navigation/transactions-navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AgentComponent } from './main-content/agent/agent.component';
import { ClientsComponent } from './main-content/clients/clients.component';
import { ReportsComponent } from './main-content/reports/reports.component';
import { TransactionsComponent } from './main-content/transactions/transactions.component';
import { AccountWalletsComponent } from './main-content/clients/account-wallets/account-wallets.component';
import { ClientAccountsComponent } from './main-content/clients/client-accounts/client-accounts.component';
import { ViewEditClientComponent } from './main-content/clients/view-edit-client/view-edit-client.component';
import { RegisterAccountComponent } from './main-content/clients/register-account/register-account.component';
import { CloseAccountComponent } from './main-content/clients/close-account/close-account.component';
import { PinResetComponent } from './main-content/clients/pin-reset/pin-reset.component';
import { UnblockAmountComponent } from './main-content/clients/unblock-amount/unblock-amount.component';
import { MyTransactionsComponent } from './main-content/agent/my-transactions/my-transactions.component';
import { ChangeOwnPasswordComponent } from './main-content/agent/change-own-password/change-own-password.component';
import { AgentPasswordRecoveryComponent } from './main-content/agent/agent-password-recovery/agent-password-recovery.component';
import { DeactiveAgentComponent } from './main-content/agent/deactive-agent/deactive-agent.component';
import { ActivateAgentComponent } from './main-content/agent/activate-agent/activate-agent.component';
import { CashInComponent } from './main-content/transactions/cash-in/cash-in.component';
import { CashOutComponent } from './main-content/transactions/cash-out/cash-out.component';
import { GiveLoanComponent } from './main-content/transactions/give-loan/give-loan.component';
import { ChargeBackComponent } from './main-content/transactions/charge-back/charge-back.component';
import { GiveLoanToGroupComponent } from './main-content/transactions/give-loan-to-group/give-loan-to-group.component';
import { CollectDeptFromGroupComponent } from './main-content/transactions/collect-dept-from-group/collect-dept-from-group.component';
import { TransactionHistoryComponent } from './main-content/transactions/transaction-history/transaction-history.component';
import { TransactionDetailsComponent } from './main-content/transactions/transaction-details/transaction-details.component';
import { CollectDeptComponent } from './main-content/transactions/collect-dept/collect-dept.component';
import { AppRoutingModule } from '../app-routing.module';
import { AgentProfileRoutingModule } from './agent-profile-routing.module';

const COMPONENTS = [
  AgentProfileComponent,
  TopNavigationComponent,
  LeftNavigationComponent,
  CompanyLogosComponent, 
  CurrencyComponent,
  ClientNavigationComponent,
  AgentNavigationComponent,
  ReportsNavigationComponent,
  TransactionsNavigationComponent,
  MainContentComponent,
  AgentComponent,
  ClientsComponent,
  ReportsComponent,
  TransactionsComponent,
  AccountWalletsComponent,
  ClientAccountsComponent,
  ViewEditClientComponent,
  RegisterAccountComponent,
  CloseAccountComponent,
  PinResetComponent,
  UnblockAmountComponent,
  MyTransactionsComponent,
  ChangeOwnPasswordComponent,
  AgentPasswordRecoveryComponent,
  DeactiveAgentComponent,
  ActivateAgentComponent,
  CashInComponent,
  CashOutComponent,
  GiveLoanComponent,
  ChargeBackComponent,
  GiveLoanToGroupComponent,
  CollectDeptFromGroupComponent,
  TransactionHistoryComponent,
  TransactionDetailsComponent,
  CollectDeptComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    AgentProfileRoutingModule,
    RouterModule,
    SharedModule,
  ], 
  exports: COMPONENTS
})
export class AgentProfileModule { }
