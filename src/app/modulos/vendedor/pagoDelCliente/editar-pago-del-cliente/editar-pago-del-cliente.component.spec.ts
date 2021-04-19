import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPagoDelClienteComponent } from './editar-pago-del-cliente.component';

describe('EditarPagoDelClienteComponent', () => {
  let component: EditarPagoDelClienteComponent;
  let fixture: ComponentFixture<EditarPagoDelClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPagoDelClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPagoDelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
