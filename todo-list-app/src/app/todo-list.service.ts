import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[] = [
    { id: 1, title: 'Sample Task 1', completed: false },
    { id: 2, title: 'Sample Task 2', completed: true },
  ];

  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
