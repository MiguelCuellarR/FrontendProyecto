import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBloqueComponent } from './editar-bloque.component';

describe('EditarBloqueComponent', () => {
  let component: EditarBloqueComponent;
  let fixture: ComponentFixture<EditarBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBloqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
