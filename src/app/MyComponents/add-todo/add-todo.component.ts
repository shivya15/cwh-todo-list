import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = ''; // Initialize as an empty string
  desc: string = ''; // Initialize as an empty string
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      sno: 8, // This should ideally be dynamically assigned
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo); // Corrected to pass the `todo` object
  }
}
