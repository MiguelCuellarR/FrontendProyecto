import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInmuebleComponent } from './crear-inmueble.component';

describe('CrearInmuebleComponent', () => {
  let component: CrearInmuebleComponent;
  let fixture: ComponentFixture<CrearInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
