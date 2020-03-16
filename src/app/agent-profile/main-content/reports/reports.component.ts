import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  activatedRoute: Observable<string>; 

  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private router : ActivatedRoute
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
