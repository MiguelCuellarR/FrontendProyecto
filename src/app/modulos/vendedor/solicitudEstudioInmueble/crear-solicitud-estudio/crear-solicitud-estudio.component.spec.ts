import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudEstudioComponent } from './crear-solicitud-estudio.component';

describe('CrearSolicitudEstudioComponent', () => {
  let component: CrearSolicitudEstudioComponent;
  let fixture: ComponentFixture<CrearSolicitudEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolicitudEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
