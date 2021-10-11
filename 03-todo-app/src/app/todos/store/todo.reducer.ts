import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from "../models/todo.model";
import { create, edit, toggle, deleteTodo, toggleAll, clearCompleted } from './todo.actions';

export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Gemas del infinito'),
  new Todo('Vencer a Thanos'),
  new Todo('Restaurar el universo'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      else {
        return todo;
      }
    })
  }),
  on(toggleAll, (state, {completed}) => {
    return state.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    })
  }),
  on(edit, (state, {id, text}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          text: text
        }
      }
      else {
        return todo;
      }
    })
  }),
  on(clearCompleted, state => state.filter(todo => !todo.completed))
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
