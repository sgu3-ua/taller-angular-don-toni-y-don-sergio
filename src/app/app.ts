import { Component, signal } from '@angular/core';
import { Lista } from './models/lista';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  
  listas: Lista[] = [
    new Lista("Lista 1", "Descripción de la lista 1", "#FF5733"),
     new Lista("Lista 2", "Descripción de la lista 2", "#33FF57"), 
     new Lista("Lista 3", "Descripción de la lista 3", "#3357FF")];
  protected readonly title = signal('appListas');
  showForm: boolean = false;
  editingLista: Lista | null = null;
  filter: string = 'all';

  get filteredListas(): Lista[] {
    if (this.filter === 'visible') return this.listas.filter(l => l.visible);
    if (this.filter === 'hidden') return this.listas.filter(l => !l.visible);
    return this.listas;
  }

  addLista(item: Lista) {
    console.log("Agregando lista:");
    console.log(item);
    this.listas.push(item);
    this.showForm = false;
  }

  deleteLista(identificador: number) {
    this.listas = this.listas.filter((lista) => lista.identificador !== identificador);
  }

  updateLista(item: Lista) {
    console.log("Modificando lista:");
    console.log(item);
    const idx = this.listas.findIndex(l => l.identificador === item.identificador);
    if (idx !== -1) {
      this.listas[idx] = item;
    }
    this.editingLista = null;
    this.showForm = false;
  }
  
  toggleForm() {
    if (this.showForm) {
      this.editingLista = null;
    }
    this.showForm = !this.showForm;
  }

  startEdit(item: Lista) {
    this.editingLista = { ...item };
    this.showForm = true;
  }
}
