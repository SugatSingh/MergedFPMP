import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChapterTableComponent } from './book-chapter-table.component';

describe('BookChapterTableComponent', () => {
  let component: BookChapterTableComponent;
  let fixture: ComponentFixture<BookChapterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookChapterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChapterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
