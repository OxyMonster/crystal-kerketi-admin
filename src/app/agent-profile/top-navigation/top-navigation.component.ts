import { Component, OnInit } from '@angular/core';
import { faBullseye, faDotCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  faDotCircle = faBullseye; 

  constructor() { }

  ngOnInit() {
  }

}
