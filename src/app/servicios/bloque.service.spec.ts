import { TestBed } from '@angular/core/testing';

import { BloqueService } from './bloque.service';

describe('BloqueService', () => {
  let service: BloqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
