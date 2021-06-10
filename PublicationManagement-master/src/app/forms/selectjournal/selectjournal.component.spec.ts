import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectjournalComponent } from './selectjournal.component';

describe('SelectjournalComponent', () => {
  let component: SelectjournalComponent;
  let fixture: ComponentFixture<SelectjournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectjournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
