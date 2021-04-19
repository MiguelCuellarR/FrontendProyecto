import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInformacionFinancieraClienteComponent } from './listar-informacion-financiera-cliente.component';

describe('ListarInformacionFinancieraClienteComponent', () => {
  let component: ListarInformacionFinancieraClienteComponent;
  let fixture: ComponentFixture<ListarInformacionFinancieraClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInformacionFinancieraClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInformacionFinancieraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
