import { createSelector } from '@ngrx/store';
import { AppState } from './state/app.state';
import { TodoState } from './state/todo.state';

export const selectTodo = (state: AppState) => state.todo;

export const selectTodoList = createSelector(
  selectTodo,
  (state: TodoState) => state.todoList
);
