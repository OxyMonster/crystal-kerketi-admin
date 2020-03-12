import { Component, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agent-navigation',
  templateUrl: './agent-navigation.component.html',
  styleUrls: ['./agent-navigation.component.scss', '../left-navigation.component.scss']
})
export class AgentNavigationComponent implements OnInit {

  // * * * Icons * * * 
  faBullseye = faBullseye;  
  
  constructor() { }

  ngOnInit() {
  }

}
