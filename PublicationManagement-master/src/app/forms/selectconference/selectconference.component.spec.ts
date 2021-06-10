import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectconferenceComponent } from './selectconference.component';

describe('SelectconferenceComponent', () => {
  let component: SelectconferenceComponent;
  let fixture: ComponentFixture<SelectconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
