import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPasswordRecoveryComponent } from './agent-password-recovery.component';

describe('AgentPasswordRecoveryComponent', () => {
  let component: AgentPasswordRecoveryComponent;
  let fixture: ComponentFixture<AgentPasswordRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPasswordRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
