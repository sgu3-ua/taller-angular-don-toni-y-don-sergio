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
}
