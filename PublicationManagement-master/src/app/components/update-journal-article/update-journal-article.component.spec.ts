import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJournalArticleComponent } from './update-journal-article.component';

describe('UpdateJournalArticleComponent', () => {
  let component: UpdateJournalArticleComponent;
  let fixture: ComponentFixture<UpdateJournalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJournalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJournalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
