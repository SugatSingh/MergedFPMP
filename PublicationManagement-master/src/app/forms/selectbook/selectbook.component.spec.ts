import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbookComponent } from './selectbook.component';

describe('SelectbookComponent', () => {
  let component: SelectbookComponent;
  let fixture: ComponentFixture<SelectbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
