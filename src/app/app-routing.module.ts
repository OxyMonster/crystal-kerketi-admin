import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AgentComponent } from './agent-profile/main-content/agent/agent.component';
import { ClientsComponent } from './agent-profile/main-content/clients/clients.component';
import { ReportsComponent } from './agent-profile/main-content/reports/reports.component';
import { TransactionsComponent } from './agent-profile/main-content/transactions/transactions.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }, 
  { path: 'login', component: AdminLoginComponent },
  { path: 'agent-profile/:id', component: AgentProfileComponent, pathMatch: 'full', children: [
    
    { path: 'agent', component: AgentComponent }, 
    { path: 'client', component: ClientsComponent }, 
    { path: 'reports', component: ReportsComponent }, 
    { path: 'transactions', component: TransactionsComponent }

  ]}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
