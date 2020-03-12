import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {

  navigationType: string; 

  constructor() { }

  ngOnInit() {

  }; 

  getNavigationType(e) {
    // console.log(e);
    this.navigationType = e;
    
  }

}
