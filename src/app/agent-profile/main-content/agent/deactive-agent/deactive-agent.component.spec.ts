import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveAgentComponent } from './deactive-agent.component';

describe('DeactiveAgentComponent', () => {
  let component: DeactiveAgentComponent;
  let fixture: ComponentFixture<DeactiveAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
