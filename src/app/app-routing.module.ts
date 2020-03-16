import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [  
  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // * * * Lazy Loading & & & & 
  { path: 'login', loadChildren: './admin-login/admin-login.module#AdminLoginModule' }, 
  { path: 'agent-profile', loadChildren: './agent-profile/agent-profile.module#AgentProfileModule' }, 
  // * * * 404 * * *
  { path: '**', component: PageNotFoundComponent }
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
