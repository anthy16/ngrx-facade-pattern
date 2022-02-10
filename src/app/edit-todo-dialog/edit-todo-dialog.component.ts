import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/models/todo.model';
import { TodoFacade } from '../store/facades/todo.facade';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss'],
})
export class EditTodoDialogComponent implements OnInit {
  newTodoName: string = '';

  constructor(
    private todoFacade: TodoFacade,
    private dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  ngOnInit(): void {
    this.newTodoName = this.todo.title;
  }

  saveTodo(): void {
    if (!this.todo.id) return;

    this.todoFacade.editTodo(this.todo.id, {
      ...this.todo,
      title: this.newTodoName,
    });
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
