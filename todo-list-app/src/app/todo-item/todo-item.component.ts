import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: TodoItem | null = null; // Input todo with default value of null
  @Output() edit = new EventEmitter<TodoItem>();
  @Output() complete = new EventEmitter<TodoItem>();
  @Output() delete = new EventEmitter<number>();
  isEditing = false;
  selectedTodo: TodoItem = { id: 0, title: '', completed: false }; // Initialize selectedTodo

  onEditClick(): void {
    if (this.todo !== null) {
      this.edit.emit(this.todo);
      this.selectedTodo = { ...this.todo }; // Set selectedTodo to a copy of todo
      this.isEditing = true;
    }
  }

  onCompleteClick(): void {
    if (this.todo !== null) {
      this.complete.emit(this.todo);
    }
  }

  onDeleteClick(): void {
    if (this.todo !== null) {
      this.delete.emit(this.todo.id);
    }
  }

  onSaveClick(): void {
    if (this.todo !== null) {
      // Update the title of the original todo with the edited title
      this.todo.title = this.selectedTodo.title;
      // Emit an event to update the parent component with the edited todo
      this.edit.emit(this.todo);
      // Reset the selectedTodo and exit edit mode
      this.selectedTodo = { id: 0, title: '', completed: false };
      this.isEditing = false;
    }
  }
}
