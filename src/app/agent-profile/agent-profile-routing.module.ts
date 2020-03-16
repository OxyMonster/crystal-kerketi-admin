
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentProfileComponent } from './agent-profile.component';
import { ClientsComponent } from './main-content/clients/clients.component';
import { AccountWalletsComponent } from './main-content/clients/account-wallets/account-wallets.component';
import { ClientAccountsComponent } from './main-content/clients/client-accounts/client-accounts.component';
import { ViewEditClientComponent } from './main-content/clients/view-edit-client/view-edit-client.component';
import { RegisterAccountComponent } from './main-content/clients/register-account/register-account.component';
import { CloseAccountComponent } from './main-content/clients/close-account/close-account.component';
import { PinResetComponent } from './main-content/clients/pin-reset/pin-reset.component';
import { UnblockAmountComponent } from './main-content/clients/unblock-amount/unblock-amount.component';
import { AgentComponent } from './main-content/agent/agent.component';
import { MyTransactionsComponent } from './main-content/agent/my-transactions/my-transactions.component';
import { ChangeOwnPasswordComponent } from './main-content/agent/change-own-password/change-own-password.component';
import { AgentPasswordRecoveryComponent } from './main-content/agent/agent-password-recovery/agent-password-recovery.component';
import { DeactiveAgentComponent } from './main-content/agent/deactive-agent/deactive-agent.component';
import { ActivateAgentComponent } from './main-content/agent/activate-agent/activate-agent.component';
import { ReportsComponent } from './main-content/reports/reports.component';
import { TransactionsComponent } from './main-content/transactions/transactions.component';
import { CashInComponent } from './main-content/transactions/cash-in/cash-in.component';
import { CashOutComponent } from './main-content/transactions/cash-out/cash-out.component';
import { GiveLoanComponent } from './main-content/transactions/give-loan/give-loan.component';
import { CollectDeptComponent } from './main-content/transactions/collect-dept/collect-dept.component';
import { ChargeBackComponent } from './main-content/transactions/charge-back/charge-back.component';
import { GiveLoanToGroupComponent } from './main-content/transactions/give-loan-to-group/give-loan-to-group.component';
import { CollectDeptFromGroupComponent } from './main-content/transactions/collect-dept-from-group/collect-dept-from-group.component';
import { TransactionHistoryComponent } from './main-content/transactions/transaction-history/transaction-history.component';
import { TransactionDetailsComponent } from './main-content/transactions/transaction-details/transaction-details.component';
import { ReportsAgentsComponent } from './main-content/reports/reports-agents/reports-agents.component';
import { ReportsClientsComponent } from './main-content/reports/reports-clients/reports-clients.component';
import { ReportsReportComponent } from './main-content/reports/reports-report/reports-report.component';
import { WalletBalancesComponent } from './main-content/reports/wallet-balances/wallet-balances.component';


const routes: Routes = [
  
    { path: '', component: AgentProfileComponent, children: [
      { path: '', redirectTo: 'client', pathMatch: 'full' }, 

      // * * * * Client * * * * * *
      { path: 'client', redirectTo: 'client/account-wallets', pathMatch: 'full', }, 
      { path: 'client/:id', component: ClientsComponent, children:[ 
        { path: 'account-wallets', component: AccountWalletsComponent, },
        { path: 'client-accounts', component: ClientAccountsComponent }, 
        { path: 'view-edit-client', component: ViewEditClientComponent},
        { path: 'register-account', component: RegisterAccountComponent },
        { path: 'close-account', component: CloseAccountComponent },
        { path: 'pin-reset', component: PinResetComponent },
        { path: 'unblock-amount', component: UnblockAmountComponent },
      ]}, 

      // * * * * Agent * * * * * *
      { path: 'agent', redirectTo:'agent/my-transactions', pathMatch: 'full', }, 
      { path: 'agent/:id', component: AgentComponent, children: [
        { path: 'my-transactions', component: MyTransactionsComponent }, 
        { path: 'change-own-password', component: ChangeOwnPasswordComponent }, 
        { path: 'agent-password-recovery', component: AgentPasswordRecoveryComponent }, 
        { path: 'deactive-agent', component: DeactiveAgentComponent }, 
        { path: 'activate-agent', component: ActivateAgentComponent }, 
      ]},
     
      // * * * * Reports * * * * * *
      { path: 'reports', redirectTo: 'reports/agent'},
      { path: 'reports/:id', component:ReportsComponent, children: [
        { path: 'agents', component: ReportsAgentsComponent },
        { path: 'clients', component: ReportsClientsComponent },
        { path: 'report', component: ReportsReportComponent },
        { path: 'wallet-ballances', component: WalletBalancesComponent },

      ]},  
      // * * * * Transactions * * * * * *
      { path: 'transactions', redirectTo: 'transactions/cash-in', pathMatch: 'full', }, 
      { path: 'transactions/:id', component: TransactionsComponent, children: [
        { path: 'cash-in', component: CashInComponent },
        { path: 'cash-out', component: CashOutComponent },
        { path: 'give-loan', component: GiveLoanComponent },
        { path: 'collcet-dept', component: CollectDeptComponent },
        { path: 'charge-back', component: ChargeBackComponent },
        { path: 'give-loan-to-group', component: GiveLoanToGroupComponent },
        { path: 'collect-dept-from-group', component: CollectDeptFromGroupComponent },
        { path: 'transaction-history', component: TransactionHistoryComponent },
        { path: 'transaction-details', component: TransactionDetailsComponent },

      ] }
  

    ] }, 

 

  
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentProfileRoutingModule { }

