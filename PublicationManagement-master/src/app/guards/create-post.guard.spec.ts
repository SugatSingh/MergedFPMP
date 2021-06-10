import { TestBed, async, inject } from '@angular/core/testing';

import { CreatePostGuard } from './create-post.guard';

describe('CreatePostGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatePostGuard]
    });
  });

  it('should ...', inject([CreatePostGuard], (guard: CreatePostGuard) => {
    expect(guard).toBeTruthy();
  }));
});
