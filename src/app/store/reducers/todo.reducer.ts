import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';
import { AddTodo, DeleteTodo, EditTodo } from '../actions/todo.actions';
import { initialTodoState, TodoState } from '../state/todo.state';

export const todoReducer = createReducer(
  initialTodoState,
  on(AddTodo, (state: TodoState, { todo }: { todo: Todo }) => ({
    ...state,
    todoList: [...state.todoList, { ...todo, id: Date.now().toString() }],
  })),
  on(EditTodo, (state: TodoState, { id, todo }: { id: string; todo: Todo }) => {
    const updatedList = state.todoList.map((oldTodo: Todo) =>
      oldTodo.id === id ? todo : oldTodo
    );
    return { ...state, todoList: updatedList };
  }),
  on(DeleteTodo, (state: TodoState, { id }: { id: string }) => {
    const updatedList = state.todoList.filter((todo: Todo) => todo.id !== id);

    return { ...state, todoList: updatedList };
  })
);
