import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConferenceArticleComponent } from './new-conference-article.component';

describe('NewConferenceArticleComponent', () => {
  let component: NewConferenceArticleComponent;
  let fixture: ComponentFixture<NewConferenceArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConferenceArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConferenceArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
