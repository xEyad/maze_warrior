import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktrackLogicComponent } from './backtrack-logic.component';

describe('BacktrackLogicComponent', () => {
  let component: BacktrackLogicComponent;
  let fixture: ComponentFixture<BacktrackLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktrackLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktrackLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
