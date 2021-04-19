import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPaisComponent } from './crear-pais.component';

describe('CrearPaisComponent', () => {
  let component: CrearPaisComponent;
  let fixture: ComponentFixture<CrearPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
