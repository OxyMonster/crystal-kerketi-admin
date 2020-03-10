import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';


const Exports  = [
  FontAwesomeModule,
  TranslateModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FontAwesomeModule,
  ], 
  exports : Exports

  
})
export class SharedModule { }
