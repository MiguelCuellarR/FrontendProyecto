import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolicitudEstudioComponent } from './editar-solicitud-estudio.component';

describe('EditarSolicitudEstudioComponent', () => {
  let component: EditarSolicitudEstudioComponent;
  let fixture: ComponentFixture<EditarSolicitudEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSolicitudEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSolicitudEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
