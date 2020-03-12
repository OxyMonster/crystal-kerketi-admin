import { Component, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transactions-navigation',
  templateUrl: './transactions-navigation.component.html',
  styleUrls: ['./transactions-navigation.component.scss', '../left-navigation.component.scss']
})
export class TransactionsNavigationComponent implements OnInit {

  // * * * Icons * * * 
  faBullseye = faBullseye;  

  constructor() { }

  ngOnInit() {
  }

}
