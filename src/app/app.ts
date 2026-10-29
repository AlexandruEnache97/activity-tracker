import { Component, signal, type WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  imports: [RouterOutlet, Header, TodoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title: WritableSignal<string> = signal('ActivityTracker');
}
