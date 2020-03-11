import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentProfileComponent } from './agent-profile.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CompanyLogosComponent } from './top-navigation/company-logos/company-logos.component';
import { CurrencyComponent } from './top-navigation/currency/currency.component';

const COMPONENTS = [
  AgentProfileComponent,
  TopNavigationComponent,
  LeftNavigationComponent,
  CompanyLogosComponent, 
  CurrencyComponent
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
