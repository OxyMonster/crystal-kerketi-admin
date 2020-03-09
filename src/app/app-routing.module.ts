import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }, 
  { path: 'login', component: AdminLoginComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
