import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetearContraseniaComponent } from './resetear-contrasenia.component';

describe('ResetearContraseniaComponent', () => {
  let component: ResetearContraseniaComponent;
  let fixture: ComponentFixture<ResetearContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetearContraseniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetearContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
