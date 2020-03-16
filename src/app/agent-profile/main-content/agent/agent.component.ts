import { Component, OnInit } from '@angular/core';
import {  Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, takeUntil,  } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  activatedRoute: Observable<string>; 

  destroy: Subject<void> = new Subject<void>(); 


  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {

    this.router.paramMap
    .pipe(
      takeUntil(this.destroy)
    )
    .subscribe(params => {

      this.activatedRoute = params['params']['id']; 
      console.log(this.activatedRoute);
      
    })
    

    
    
  }

}
