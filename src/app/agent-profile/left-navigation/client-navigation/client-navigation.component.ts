import { Component, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client-navigation',
  templateUrl: './client-navigation.component.html',
  styleUrls: ['./client-navigation.component.scss','../left-navigation.component.scss']
})
export class ClientNavigationComponent implements OnInit {

  // * * * Icons * * * 
  faBullseye = faBullseye;  

  constructor() { }

  ngOnInit() {
  }

}
