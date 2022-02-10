import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { Todo } from '../shared/models/todo.model';
import { TodoFacade } from '../store/facades/todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]> | undefined;

  constructor(private todoFacade: TodoFacade, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todoList$ = this.todoFacade.todoList$;

    this.todoFacade.loadTodoList();
  }

  addNewTodo(): void {
    this.dialog.open(AddTodoDialogComponent);
  }

  editTodo(todo: Todo): void {
    this.dialog.open(EditTodoDialogComponent, { data: todo });
  }

  deleteTodo(todo: Todo): void {
    if (!todo.id) return;

    this.todoFacade.deleteTodo(todo.id);
  }
}
