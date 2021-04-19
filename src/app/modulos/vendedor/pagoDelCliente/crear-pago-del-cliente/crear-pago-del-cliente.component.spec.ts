import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPagoDelClienteComponent } from './crear-pago-del-cliente.component';

describe('CrearPagoDelClienteComponent', () => {
  let component: CrearPagoDelClienteComponent;
  let fixture: ComponentFixture<CrearPagoDelClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPagoDelClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPagoDelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
