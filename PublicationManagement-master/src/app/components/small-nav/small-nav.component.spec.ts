import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNavComponent } from './small-nav.component';

describe('SmallNavComponent', () => {
  let component: SmallNavComponent;
  let fixture: ComponentFixture<SmallNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
