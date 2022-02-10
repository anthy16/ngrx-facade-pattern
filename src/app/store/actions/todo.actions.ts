import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';

enum TodoActions {
  LoadTodoList = '[Todo List] Load Todo List',
  AddTodo = '[Todo List] Add Todo',
  EditTodo = '[Todo List] Edit Todo',
  DeleteTodo = '[Todo List] Delete Todo',
}

export const LoadTodoList = createAction(TodoActions.LoadTodoList);

export const AddTodo = createAction(
  TodoActions.AddTodo,
  props<{ todo: Todo }>()
);

export const EditTodo = createAction(
  TodoActions.EditTodo,
  props<{ id: string; todo: Todo }>()
);

export const DeleteTodo = createAction(
  TodoActions.DeleteTodo,
  props<{ id: string }>()
);
