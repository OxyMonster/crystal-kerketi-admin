import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

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


