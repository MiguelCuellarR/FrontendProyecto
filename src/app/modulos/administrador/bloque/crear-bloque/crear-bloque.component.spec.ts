import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBloqueComponent } from './crear-bloque.component';

describe('CrearBloqueComponent', () => {
  let component: CrearBloqueComponent;
  let fixture: ComponentFixture<CrearBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBloqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
