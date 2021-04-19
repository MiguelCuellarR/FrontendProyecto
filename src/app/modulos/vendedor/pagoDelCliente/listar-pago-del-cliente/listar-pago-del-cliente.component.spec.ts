import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPagoDelClienteComponent } from './listar-pago-del-cliente.component';

describe('ListarPagoDelClienteComponent', () => {
  let component: ListarPagoDelClienteComponent;
  let fixture: ComponentFixture<ListarPagoDelClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPagoDelClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoDelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
