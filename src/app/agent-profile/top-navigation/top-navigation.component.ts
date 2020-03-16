import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faMoneyCheckAlt, faUser, faUserSecret, faBug } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  @Output() result: EventEmitter<string> = new EventEmitter<string>(); 

  // * * *  Icons * * *
  faUser = faUser; 
  faMoneyCheckAlt = faMoneyCheckAlt; 
  faUserSecret = faUserSecret; 
  faBug = faBug; 
  // * * * / * * * 

  navigationType: string; 

  constructor(
    private router: Router,
    // private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.navigationType = this.router.url.split('/')[2];
 
    
    
  }; 


  toggleRouteNavigationType(type: string) {
    this.navigationType = type; 
    this.result.emit(type); 

    switch (type) {
      case 'client':
        this.router.navigate(['/agent-profile/client']); 
        break;
      case 'transactions' : 
        this.router.navigate(['/agent-profile/transactions'])
        break;
      case 'agent':
        this.router.navigate(['/agent-profile/agent']); 
        break;
      case 'reports' : 
        this.router.navigate(['/agent-profile/reports'])
        break;

    };
  };

}
