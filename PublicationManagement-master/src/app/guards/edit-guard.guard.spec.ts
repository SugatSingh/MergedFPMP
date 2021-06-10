import { TestBed, async, inject } from '@angular/core/testing';

import { EditGuardGuard } from './edit-guard.guard';

describe('EditGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditGuardGuard]
    });
  });

  it('should ...', inject([EditGuardGuard], (guard: EditGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
