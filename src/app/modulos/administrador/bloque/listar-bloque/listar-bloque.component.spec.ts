import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBloqueComponent } from './listar-bloque.component';

describe('ListarBloqueComponent', () => {
  let component: ListarBloqueComponent;
  let fixture: ComponentFixture<ListarBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBloqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
