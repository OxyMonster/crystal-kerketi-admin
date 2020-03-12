import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNavigationComponent } from './agent-navigation.component';

describe('AgentNavigationComponent', () => {
  let component: AgentNavigationComponent;
  let fixture: ComponentFixture<AgentNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
