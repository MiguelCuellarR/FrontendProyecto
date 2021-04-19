import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPorCiudadComponent } from './proyectos-por-ciudad.component';

describe('ProyectosPorCiudadComponent', () => {
  let component: ProyectosPorCiudadComponent;
  let fixture: ComponentFixture<ProyectosPorCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPorCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPorCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
