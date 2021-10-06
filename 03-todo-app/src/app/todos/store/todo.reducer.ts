import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from "../models/todo.model";
import { create, toggle } from "./todo.actions";

export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Gemas del infinito'),
  new Todo('Vencer a Thanos'),
  new Todo('Restaurar el universo'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
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
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
