import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsReportComponent } from './reports-report.component';

describe('ReportsReportComponent', () => {
  let component: ReportsReportComponent;
  let fixture: ComponentFixture<ReportsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
