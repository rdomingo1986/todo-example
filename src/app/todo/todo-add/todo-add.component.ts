import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  task: string;
  index: number;

  @Output() addNewTask: EventEmitter<any>;

  constructor() {
    this.task = '';
    this.index = 1;
    this.addNewTask = new EventEmitter<any>();
  }

  ngOnInit() { }

  addTask() {
    this.addNewTask.emit({
      description: this.task,
      index: this.index
    });
    this.task = '';
    this.index = this.index + 1;
  }
}
