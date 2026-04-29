import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLista } from './form-lista';

describe('FormLista', () => {
  let component: FormLista;
  let fixture: ComponentFixture<FormLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLista],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
