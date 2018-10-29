import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoComponent
  ],
  declarations: [TodoComponent, TodoAddComponent, TodoListComponent, TodoDoneComponent]
})
export class TodoModule { }
