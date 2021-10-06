import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from "../models/todo.model";
import { create } from "./todo.actions";

export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Gemas del infinito'),
  new Todo('Vencer a Thanos'),
  new Todo('Restaurar el universo'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
