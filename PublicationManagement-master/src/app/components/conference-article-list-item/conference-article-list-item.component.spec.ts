import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceArticleListItemComponent } from './conference-article-list-item.component';

describe('ConferenceArticleListItemComponent', () => {
  let component: ConferenceArticleListItemComponent;
  let fixture: ComponentFixture<ConferenceArticleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceArticleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceArticleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
