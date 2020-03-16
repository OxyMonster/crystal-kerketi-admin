import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectDeptFromGroupComponent } from './collect-dept-from-group.component';

describe('CollectDeptFromGroupComponent', () => {
  let component: CollectDeptFromGroupComponent;
  let fixture: ComponentFixture<CollectDeptFromGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectDeptFromGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectDeptFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
