import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/store/todo.reducer";
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[],
  filter: string,
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
}
