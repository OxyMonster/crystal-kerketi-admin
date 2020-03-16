import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil,  } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  activatedRoute: Observable<string>; 

  destroy: Subject<void> = new Subject<void>(); 
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.route.paramMap
              .pipe(
                takeUntil(this.destroy)
              )
              .subscribe(params => {
  
                this.activatedRoute = params['params']['id']; 
                console.log(this.activatedRoute);

              }); 
              
   
    
    
  }; 
  

}
