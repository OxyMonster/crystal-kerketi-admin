import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsClientsComponent } from './reports-clients.component';

describe('ReportsClientsComponent', () => {
  let component: ReportsClientsComponent;
  let fixture: ComponentFixture<ReportsClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
