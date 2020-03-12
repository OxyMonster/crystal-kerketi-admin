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
  TransactionsComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ], 
  exports: COMPONENTS
})
export class AgentProfileModule { }
