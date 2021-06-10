import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJournalArticleComponent } from './all-journal-article.component';

describe('AllJournalArticleComponent', () => {
  let component: AllJournalArticleComponent;
  let fixture: ComponentFixture<AllJournalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllJournalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJournalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
