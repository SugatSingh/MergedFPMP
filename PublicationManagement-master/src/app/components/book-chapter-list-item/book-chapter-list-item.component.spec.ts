import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChapterListItemComponent } from './book-chapter-list-item.component';

describe('BookChapterListItemComponent', () => {
  let component: BookChapterListItemComponent;
  let fixture: ComponentFixture<BookChapterListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookChapterListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChapterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
