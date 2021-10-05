import { Action, createReducer, on } from "@ngrx/store";
import { incrementar, decrementar, reset, multiplicar, dividir } from './contador.actions';

export const initialState = 10;

const _counterReducer = createReducer(initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, {numero}) => state * numero),
  on(dividir, (state, {numero}) => state / numero),
  on(reset, (state) => initialState)
);

export function contadorReducer(state: number | undefined, action: Action): number {
  return _counterReducer(state, action);
}
