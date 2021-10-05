import { Action } from "@ngrx/store";
import { incrementar, decrementar } from './contador.actions';

export function contadorReducer(state: number = 20, action: Action): number {
  switch(action.type){
    case incrementar.type:
      return state + 1;

    case decrementar.type:
      return state - 1;

    default:
      return state;
  }
}
