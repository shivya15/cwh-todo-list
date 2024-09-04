import { Component } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
 localItem: string;
 todos: Todo[];
 constructor(){
  if (typeof localStorage !== 'undefined') {
    this.localItem = localStorage.getItem("todos") || '';
    if (this.localItem === '') {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  } else {
    this.localItem = '';
    this.todos = []; // Provide a fallback in case localStorage is not available
  }
  
 }

 deleteTodo(todo:Todo){
  console.log(todo);
  const index= this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
 }
 addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(this.todos));
 }
}
