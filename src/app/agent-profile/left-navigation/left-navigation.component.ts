import { Component, OnInit, Output, Input } from '@angular/core';
import { faBullseye, faDotCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  @Input() navigationType: string; 

// * * * Icons * * * 
  faBullseye = faBullseye;  
  faDotCircle = faDotCircle; 

  constructor() { }

  ngOnInit() {
    
  }; 

  

}
