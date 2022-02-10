import { Todo } from 'src/app/shared/models/todo.model';

export interface TodoState {
  todoList: Todo[];
}

export const initialTodoState: TodoState = {
  todoList: [
    { id: '1', title: 'A todo' },
    { id: '2', title: 'A different todo' },
  ],
};
