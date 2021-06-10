import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationInputFormComponent } from './publication-input-form.component';

describe('PublicationInputFormComponent', () => {
  let component: PublicationInputFormComponent;
  let fixture: ComponentFixture<PublicationInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
