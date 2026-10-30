import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button],
  selector: 'app-add-todo-modal',
  styleUrl: './add-todo-modal.css',
  templateUrl: './add-todo-modal.html',
})
export class AddTodoModal {
  @Output() onCloseModal = new EventEmitter<void>();

  closeModal(): void {
    this.onCloseModal.emit();
  }
}
