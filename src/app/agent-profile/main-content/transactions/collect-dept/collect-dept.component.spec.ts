import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectDeptComponent } from './collect-dept.component';

describe('CollectDeptComponent', () => {
  let component: CollectDeptComponent;
  let fixture: ComponentFixture<CollectDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
