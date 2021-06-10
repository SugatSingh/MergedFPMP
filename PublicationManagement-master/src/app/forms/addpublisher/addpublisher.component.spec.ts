import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpublisherComponent } from './addpublisher.component';

describe('AddpublisherComponent', () => {
  let component: AddpublisherComponent;
  let fixture: ComponentFixture<AddpublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
