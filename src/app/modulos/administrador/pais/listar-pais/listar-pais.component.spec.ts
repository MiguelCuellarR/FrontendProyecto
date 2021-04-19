import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPaisComponent } from './listar-pais.component';

describe('ListarPaisComponent', () => {
  let component: ListarPaisComponent;
  let fixture: ComponentFixture<ListarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
