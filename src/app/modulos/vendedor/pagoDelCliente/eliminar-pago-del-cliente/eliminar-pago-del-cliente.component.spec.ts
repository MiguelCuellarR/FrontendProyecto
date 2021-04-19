import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPagoDelClienteComponent } from './eliminar-pago-del-cliente.component';

describe('EliminarPagoDelClienteComponent', () => {
  let component: EliminarPagoDelClienteComponent;
  let fixture: ComponentFixture<EliminarPagoDelClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPagoDelClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPagoDelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
