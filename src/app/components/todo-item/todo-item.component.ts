import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {
  }

  ngOnInit(): void {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      list: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  // change text styling depending on the checkbox state
  onToggle(todo) {
    todo.completed = !todo.completed;
  }
  onDelete(todo) {
    console.log('delete');
  }

}
