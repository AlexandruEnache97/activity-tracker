import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  @Input() text!: string;
  @Output() onClick = new EventEmitter<void>();

  click(): void {
    this.onClick.emit();
  }
}
