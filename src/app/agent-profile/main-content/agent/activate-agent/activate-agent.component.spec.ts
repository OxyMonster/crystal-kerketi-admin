import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAgentComponent } from './activate-agent.component';

describe('ActivateAgentComponent', () => {
  let component: ActivateAgentComponent;
  let fixture: ComponentFixture<ActivateAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
