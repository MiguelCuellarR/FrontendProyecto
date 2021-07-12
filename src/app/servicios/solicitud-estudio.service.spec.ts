import { TestBed } from '@angular/core/testing';

import { SolicitudEstudioService } from './solicitud-estudio.service';

describe('SolicitudEstudioService', () => {
  let service: SolicitudEstudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudEstudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
