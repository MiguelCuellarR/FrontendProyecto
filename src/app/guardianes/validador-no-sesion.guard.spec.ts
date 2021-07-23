import { TestBed } from '@angular/core/testing';

import { ValidadorNoSesionGuard } from './validador-no-sesion.guard';

describe('ValidadorNoSesionGuard', () => {
  let guard: ValidadorNoSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadorNoSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
