import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpublisherComponent } from './newpublisher.component';

describe('NewpublisherComponent', () => {
  let component: NewpublisherComponent;
  let fixture: ComponentFixture<NewpublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
