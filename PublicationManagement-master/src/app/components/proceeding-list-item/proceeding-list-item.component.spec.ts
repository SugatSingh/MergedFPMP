import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingListItemComponent } from './proceeding-list-item.component';

describe('ProceedingListItemComponent', () => {
  let component: ProceedingListItemComponent;
  let fixture: ComponentFixture<ProceedingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedingListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
