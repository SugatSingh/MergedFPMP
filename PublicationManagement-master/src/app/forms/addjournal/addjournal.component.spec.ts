import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjournalComponent } from './addjournal.component';

describe('AddjournalComponent', () => {
  let component: AddjournalComponent;
  let fixture: ComponentFixture<AddjournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
