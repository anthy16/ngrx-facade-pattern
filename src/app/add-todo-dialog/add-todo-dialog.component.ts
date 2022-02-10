import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../shared/models/todo.model';
import { TodoFacade } from '../store/facades/todo.facade';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss'],
})
export class AddTodoDialogComponent {
  newTodoName: string = '';

  constructor(
    private todoFacade: TodoFacade,
    private dialogRef: MatDialogRef<AddTodoDialogComponent>
  ) {}

  addTodo(): void {
    const todoToAdd: Todo = { title: this.newTodoName };

    this.todoFacade.addTodo(todoToAdd);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
