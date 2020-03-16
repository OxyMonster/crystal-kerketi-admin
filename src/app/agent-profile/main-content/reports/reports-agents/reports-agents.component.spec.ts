import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAgentsComponent } from './reports-agents.component';

describe('ReportsAgentsComponent', () => {
  let component: ReportsAgentsComponent;
  let fixture: ComponentFixture<ReportsAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
