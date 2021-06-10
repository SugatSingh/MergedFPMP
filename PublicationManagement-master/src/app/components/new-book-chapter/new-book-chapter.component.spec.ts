import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookChapterComponent } from './new-book-chapter.component';

describe('NewBookChapterComponent', () => {
  let component: NewBookChapterComponent;
  let fixture: ComponentFixture<NewBookChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
