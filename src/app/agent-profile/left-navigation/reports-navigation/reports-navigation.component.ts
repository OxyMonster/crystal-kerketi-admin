import { Component, OnInit } from '@angular/core';
import { faBullseye, faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reports-navigation',
  templateUrl: './reports-navigation.component.html',
  styleUrls: ['./reports-navigation.component.scss', '../left-navigation.component.scss']
})
export class ReportsNavigationComponent implements OnInit {

    // * * * Icons * * * 
    faBullseye = faBullseye;  
    faWallet = faWallet; 

  constructor() { }

  ngOnInit() {
  }

}
