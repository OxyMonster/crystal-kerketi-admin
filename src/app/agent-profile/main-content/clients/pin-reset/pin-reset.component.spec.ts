import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinResetComponent } from './pin-reset.component';

describe('PinResetComponent', () => {
  let component: PinResetComponent;
  let fixture: ComponentFixture<PinResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
