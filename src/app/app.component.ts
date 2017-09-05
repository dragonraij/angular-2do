import { Component } from '@angular/core';
// Import class so we can register it as dependency injection token
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  
  constructor(private todoDataService: TodoDataService) {
  }


    onAddTodo(todo: TOdo){
        this.todoDataService.addTodo(todo);
    }

    toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  
  }
  
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
  
}
