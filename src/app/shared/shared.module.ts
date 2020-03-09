import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const Exports  = [
  FontAwesomeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FontAwesomeModule
  ], 
  exports : Exports

  
})
export class SharedModule { }
