import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInformacionFinancieraClienteComponent } from './crear-informacion-financiera-cliente.component';

describe('CrearInformacionFinancieraClienteComponent', () => {
  let component: CrearInformacionFinancieraClienteComponent;
  let fixture: ComponentFixture<CrearInformacionFinancieraClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInformacionFinancieraClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInformacionFinancieraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
