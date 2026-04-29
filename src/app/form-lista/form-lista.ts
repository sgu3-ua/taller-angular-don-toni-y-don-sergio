import { Component, Output, EventEmitter } from '@angular/core';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-form-lista',
  standalone: false,
  templateUrl: './form-lista.html',
  styleUrl: './form-lista.css',
})
export class FormLista {
  lista : Lista = new Lista();
  @Output() created = new EventEmitter<Lista>();

  onSubmit(form: any) {
    if (form.invalid) return;
    const payload = { ...this.lista };//Basura del js, ya ni sabe gestionar referencias
    this.created.emit(payload);
    this.lista = new Lista();
    form.resetForm();
  }
  
}
