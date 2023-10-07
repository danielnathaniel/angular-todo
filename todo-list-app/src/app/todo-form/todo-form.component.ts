import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model'; // Ensure the correct path

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() addTodo: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  title: string = '';

  onAddTodoClick(): void {
    if (this.title.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        title: this.title,
        completed: false,
      };
      this.addTodo.emit(newTodo);
      this.title = ''; // Clear the input field
    }
  }
}
