import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-tarea',
  standalone: false,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css'
})
export class TareaComponent {
  @Input() tarea!: Tarea;
  @Output() remove = new EventEmitter<number>();
  @Output() toggled = new EventEmitter<number>();

  onToggle() {
    this.toggled.emit(this.tarea.identificador);
  }

  onDelete() {
    this.remove.emit(this.tarea.identificador);
  }
}
