import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalArticleTableComponent } from './journal-article-table.component';

describe('JournalArticleTableComponent', () => {
  let component: JournalArticleTableComponent;
  let fixture: ComponentFixture<JournalArticleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalArticleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalArticleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
