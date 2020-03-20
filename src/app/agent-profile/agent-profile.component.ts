import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {

  navigationType: string; 
  isNavigationEvenetActive: boolean = false; 

  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
   
    if ( !this.isNavigationEvenetActive ) {

      this.navigationType =  this.router.url.split('/')[2];
      console.log(this.navigationType);
      
    }
    
  }; 

  getNavigationType(e) {
    if (e) {
      this.navigationType = e;
      this.isNavigationEvenetActive = true; 
    } else {
      this.isNavigationEvenetActive = false; 
    }
    
  }

}
