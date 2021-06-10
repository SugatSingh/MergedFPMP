import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconferenceComponent } from './addconference.component';

describe('AddconferenceComponent', () => {
  let component: AddconferenceComponent;
  let fixture: ComponentFixture<AddconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
