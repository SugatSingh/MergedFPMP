import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashusersComponent } from './dashusers.component';

describe('DashusersComponent', () => {
  let component: DashusersComponent;
  let fixture: ComponentFixture<DashusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
