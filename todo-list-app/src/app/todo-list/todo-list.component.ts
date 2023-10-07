import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList: TodoItem[] = [];
  @Output() edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() complete: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  editTodoItem(todo: TodoItem): void {
    this.edit.emit(todo);
  }

  toggleComplete(todo: TodoItem): void {
    this.complete.emit(todo);
  }

  deleteTodoItem(id: number): void {
    this.delete.emit(id);
  }
}
