import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProceedingsComponent } from './new-proceedings.component';

describe('NewProceedingsComponent', () => {
  let component: NewProceedingsComponent;
  let fixture: ComponentFixture<NewProceedingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProceedingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
