import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.scss']
})
export class TodoDoneComponent implements OnInit {
  @Input() done: Array<any>;
  @Output() taskTodo: EventEmitter<any>;

  constructor() {
    this.taskTodo = new EventEmitter<any>();
  }

  ngOnInit() { }

  markTaskTodo(task) {
    this.taskTodo.emit(task);
  }
}
