import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Lista as ListaModel } from '../models/lista';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  @Input() listas : ListaModel[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<ListaModel>();

  expanded = new Set<number>();
  wantToDeleteIndex : number | null = null;
  // filtros de tareas por identificador de lista: 'all' | 'done' | 'todo'
  taskFilters: Map<number, string> = new Map();

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

  setTaskFilter(listId: number, filter: string) {
    this.taskFilters.set(listId, filter);
  }

  getFilteredTasks(list: ListaModel) {
    const filter = this.taskFilters.get(list.identificador) || 'all';
    if (!list.tareas) return [];
    if (filter === 'done') return list.tareas.filter(t => t.completada);
    if (filter === 'todo') return list.tareas.filter(t => !t.completada);
    return list.tareas;
  }

  getTaskFilter(listId: number) {
    return this.taskFilters.get(listId) || 'all';
  }

  addTask(list: ListaModel, titulo: string) {
    if (!titulo || !titulo.trim()) return;
    const t = new Tarea(titulo.trim());
    if (!list.tareas) list.tareas = [];
    list.tareas.push(t);
    this.update.emit(list);
  }

  deleteTask(list: ListaModel, tareaId: number) {
    if (!list.tareas) return;
    list.tareas = list.tareas.filter(t => t.identificador !== tareaId);
    this.update.emit(list);
  }

  toggleTask(list: ListaModel, tareaId: number) {
    if (!list.tareas) return;
    const t = list.tareas.find(x => x.identificador === tareaId);
    if (!t) return;
    t.completada = !t.completada;
    this.update.emit(list);
  }

}
