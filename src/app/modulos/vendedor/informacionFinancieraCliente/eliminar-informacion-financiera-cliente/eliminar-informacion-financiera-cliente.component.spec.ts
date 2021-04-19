import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInformacionFinancieraClienteComponent } from './eliminar-informacion-financiera-cliente.component';

describe('EliminarInformacionFinancieraClienteComponent', () => {
  let component: EliminarInformacionFinancieraClienteComponent;
  let fixture: ComponentFixture<EliminarInformacionFinancieraClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarInformacionFinancieraClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarInformacionFinancieraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
