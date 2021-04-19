import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPorPaisComponent } from './proyectos-por-pais.component';

describe('ProyectosPorPaisComponent', () => {
  let component: ProyectosPorPaisComponent;
  let fixture: ComponentFixture<ProyectosPorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPorPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
