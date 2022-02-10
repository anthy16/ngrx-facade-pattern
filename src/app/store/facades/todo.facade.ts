import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo.model';
import { selectTodoList } from '..';
import {
  AddTodo,
  DeleteTodo,
  EditTodo,
  LoadTodoList,
} from '../actions/todo.actions';
import { AppState } from '../state/app.state';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  todoList$: Observable<Todo[]> = this.store.select(selectTodoList);

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

  loadTodoList(): void {
    this.store.dispatch(LoadTodoList());
  }

  addTodo(todo: Todo): void {
    this.store.dispatch(AddTodo({ todo }));

    this.snackBar.open(`Todo "${todo.title}" added.`);
  }

  editTodo(id: string, todo: Todo): void {
    this.store.dispatch(EditTodo({ id, todo }));

    this.snackBar.open(`Todo "${todo.title}" edited.`);
  }

  deleteTodo(id: string): void {
    this.store.dispatch(DeleteTodo({ id }));

    this.snackBar.open(`Todo deleted.`);
  }
}
