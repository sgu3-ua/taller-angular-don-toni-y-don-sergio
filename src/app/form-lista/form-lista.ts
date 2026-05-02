import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-form-lista',
  standalone: false,
  templateUrl: './form-lista.html',
  styleUrl: './form-lista.css',
})
export class FormLista {
  lista : Lista = new Lista();
  @Input() editLista?: Lista | null = null;
  isEditMode: boolean = false;
  @Output() created = new EventEmitter<Lista>();
  @Output() updated = new EventEmitter<Lista>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editLista']) {
      const val: Lista | undefined | null = changes['editLista'].currentValue;
      if (val) {
        this.lista = { ...val };
        this.isEditMode = true;
      } else {
        this.lista = new Lista();
        this.isEditMode = false;
      }
    }
  }

  onSubmit(form: any) {
    if (form.invalid) return;
    const payload = { ...this.lista };//Basura del js, ya ni sabe gestionar referencias
    if (this.isEditMode) {
      this.updated.emit(payload);
    } else {
      this.created.emit(payload);
    }
    this.lista = new Lista();
    form.resetForm();
    this.isEditMode = false;
    this.editLista = null;
  }
  
}
