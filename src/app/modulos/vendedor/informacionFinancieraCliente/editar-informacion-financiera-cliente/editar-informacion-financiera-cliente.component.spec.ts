import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformacionFinancieraClienteComponent } from './editar-informacion-financiera-cliente.component';

describe('EditarInformacionFinancieraClienteComponent', () => {
  let component: EditarInformacionFinancieraClienteComponent;
  let fixture: ComponentFixture<EditarInformacionFinancieraClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformacionFinancieraClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInformacionFinancieraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
