import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudEstudioComponent } from './eliminar-solicitud-estudio.component';

describe('EliminarSolicitudEstudioComponent', () => {
  let component: EliminarSolicitudEstudioComponent;
  let fixture: ComponentFixture<EliminarSolicitudEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSolicitudEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSolicitudEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
