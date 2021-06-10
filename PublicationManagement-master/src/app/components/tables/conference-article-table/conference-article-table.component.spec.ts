import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceArticleTableComponent } from './conference-article-table.component';

describe('ConferenceArticleTableComponent', () => {
  let component: ConferenceArticleTableComponent;
  let fixture: ComponentFixture<ConferenceArticleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceArticleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceArticleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
