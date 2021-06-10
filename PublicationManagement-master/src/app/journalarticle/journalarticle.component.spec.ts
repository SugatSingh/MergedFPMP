import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalarticleComponent } from './journalarticle.component';

describe('JournalarticleComponent', () => {
  let component: JournalarticleComponent;
  let fixture: ComponentFixture<JournalarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
