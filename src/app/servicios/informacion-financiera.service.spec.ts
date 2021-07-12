import { TestBed } from '@angular/core/testing';

import { InformacionFinancieraService } from './informacion-financiera.service';

describe('InformacionFinancieraService', () => {
  let service: InformacionFinancieraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionFinancieraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
