import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalAricleListItemComponent } from './journal-aricle-list-item.component';

describe('JournalAricleListItemComponent', () => {
  let component: JournalAricleListItemComponent;
  let fixture: ComponentFixture<JournalAricleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalAricleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalAricleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
