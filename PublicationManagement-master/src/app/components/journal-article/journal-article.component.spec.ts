import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalArticleComponent } from './journal-article.component';

describe('JournalArticleComponent', () => {
  let component: JournalArticleComponent;
  let fixture: ComponentFixture<JournalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
