import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalListItemComponent } from './journal-list-item.component';

describe('JournalListItemComponent', () => {
  let component: JournalListItemComponent;
  let fixture: ComponentFixture<JournalListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
