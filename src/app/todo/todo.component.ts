import { Component, OnInit } from '@angular/core';

const filter = (arr, item) => arr.filter(el => el.index !== item.index);

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks: Array<any>;
  done: Array<any>;

  constructor() {
    this.tasks = [];
    this.done = [];
  }

  ngOnInit() { }

  addNewTask(task) {
    this.tasks = [...this.tasks, task];
  }

  markTaskDone(task) {
    this.tasks = filter(this.tasks, task);
    this.done = [...this.done, task];
  }

  markTaskTodo(task) {
    this.done = filter(this.done, task);
    this.tasks = [...this.tasks, task];
  }

}
