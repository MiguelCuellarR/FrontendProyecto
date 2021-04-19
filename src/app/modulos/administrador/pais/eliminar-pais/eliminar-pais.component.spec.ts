import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPaisComponent } from './eliminar-pais.component';

describe('EliminarPaisComponent', () => {
  let component: EliminarPaisComponent;
  let fixture: ComponentFixture<EliminarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
