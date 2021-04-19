import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProyectoComponent } from './eliminar-proyecto.component';

describe('EliminarProyectoComponent', () => {
  let component: EliminarProyectoComponent;
  let fixture: ComponentFixture<EliminarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
