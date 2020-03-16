import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { CommonModule } from '@angular/common';  

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AgentProfileModule } from './agent-profile/agent-profile.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [   
    AppComponent, PageNotFoundComponent, 
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AdminLoginModule, 
    AgentProfileModule, 
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [ HttpClient ]
      }
  }) 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

