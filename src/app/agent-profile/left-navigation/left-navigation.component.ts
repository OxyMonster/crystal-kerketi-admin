import { Component, OnInit, Output, Input } from '@angular/core';
import { faBullseye, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


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
  // * * / * * 

  activeURL: Observable<string>; 
  destroy: Subject<void> =  new Subject<void>(); 


  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.router.paramMap
               .pipe(
                takeUntil(this.destroy)
               )
               .subscribe(params => {
                console.log(params);
                
                this.navigationType = params['params']['id']; 

                // console.log(this.activeURL);
                  
               }); 
    
    
  }; 

  

}
