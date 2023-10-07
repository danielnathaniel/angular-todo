import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: TodoItem[] = [];
  title = 'Angular To-Do List App';

  addTodoItem(newTodo: TodoItem): void {
    this.todoList.push(newTodo);
  }

  editTodoItem(editedTodo: TodoItem): void {
    // Find the edited item by ID and update it
    const index = this.todoList.findIndex((todo) => todo.id === editedTodo.id);
    if (index !== -1) {
      this.todoList[index] = editedTodo;
    }
  }

  toggleComplete(todo: TodoItem): void {
    const index = this.todoList.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todoList[index].completed = !this.todoList[index].completed;
    }
  }

  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
