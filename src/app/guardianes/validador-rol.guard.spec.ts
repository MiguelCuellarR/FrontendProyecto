import { TestBed } from '@angular/core/testing';

import { ValidadorRolGuard } from './validador-rol.guard';

describe('ValidadorRolGuard', () => {
  let guard: ValidadorRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadorRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
