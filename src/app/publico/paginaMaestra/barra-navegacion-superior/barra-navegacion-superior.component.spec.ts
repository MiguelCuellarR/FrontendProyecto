import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionSuperiorComponent } from './barra-navegacion-superior.component';

describe('BarraNavegacionSuperiorComponent', () => {
  let component: BarraNavegacionSuperiorComponent;
  let fixture: ComponentFixture<BarraNavegacionSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
