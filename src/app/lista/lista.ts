import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Lista as ListaModel } from '../models/lista'; 

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  @Input() listas : ListaModel[] = [];
  @Output() delete = new EventEmitter<number>();

  expanded = new Set<number>();
  wantToDeleteIndex : number | null = null;

  toggleDescripcion(i : number) {
    if (this.expanded.has(i)) {
      this.expanded.delete(i);
    } else {
      this.expanded.add(i);
    }
  }

  wantToDelete(i : number) {
    // mostramos un mensaje de confirmación antes de eliminar con un modal
    this.wantToDeleteIndex = i;
  }

  isExpanded(i : number) {
    return this.expanded.has(i);
  }

}
