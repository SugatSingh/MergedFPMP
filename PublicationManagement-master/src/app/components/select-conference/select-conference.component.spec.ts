import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConferenceComponent } from './select-conference.component';

describe('SelectConferenceComponent', () => {
  let component: SelectConferenceComponent;
  let fixture: ComponentFixture<SelectConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
