import { Component, computed, signal } from '@angular/core';

import { TodoItem } from '../../types/todo-list-types';
import { Button } from '../button/button';

@Component({
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
  imports: [Button],
})
export class TodoList {
  protected readonly items = signal<TodoItem[]>([
    { id: 1, title: "Review today's priorities", completed: false },
    { id: 2, title: 'Finish the current task', completed: false },
    { id: 3, title: 'Take a short break', completed: false },
    { id: 4, title: 'Review the project timeline', completed: false },
  ]);
  protected readonly completedCount = computed(
    () => this.items().filter((item) => item.completed).length,
  );

  protected toggleItem(id: number): void {
    this.items.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }
}
