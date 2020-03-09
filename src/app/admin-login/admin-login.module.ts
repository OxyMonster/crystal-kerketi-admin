import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';
import { AdminLoginService } from './admin-login.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';  



const COMPONENTS  = [
  AdminLoginComponent

]



@NgModule({
  declarations: COMPONENTS,

  imports: [
    ReactiveFormsModule,
    FormsModule, 
    SharedModule,
    CommonModule
  ],

  providers: [
    AdminLoginService
  ],

  exports: COMPONENTS
  
})
export class AdminLoginModule { }
