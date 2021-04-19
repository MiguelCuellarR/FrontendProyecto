import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudEstudioComponent } from './listar-solicitud-estudio.component';

describe('ListarSolicitudEstudioComponent', () => {
  let component: ListarSolicitudEstudioComponent;
  let fixture: ComponentFixture<ListarSolicitudEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSolicitudEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
