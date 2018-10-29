import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Array<string>;
  @Output() taskDone: EventEmitter<any>;

  constructor() {
    this.taskDone = new EventEmitter<any>();
  }

  ngOnInit() { }

  markTaskDone(task: any) {
    this.taskDone.emit(task);
  }
}
