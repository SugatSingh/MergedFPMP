import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProceedingComponent } from './select-proceeding.component';

describe('SelectProceedingComponent', () => {
  let component: SelectProceedingComponent;
  let fixture: ComponentFixture<SelectProceedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProceedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProceedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
