import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjournalarticleComponent } from './addjournalarticle.component';

describe('AddjournalarticleComponent', () => {
  let component: AddjournalarticleComponent;
  let fixture: ComponentFixture<AddjournalarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjournalarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjournalarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
