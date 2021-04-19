import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBloqueComponent } from './eliminar-bloque.component';

describe('EliminarBloqueComponent', () => {
  let component: EliminarBloqueComponent;
  let fixture: ComponentFixture<EliminarBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarBloqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
