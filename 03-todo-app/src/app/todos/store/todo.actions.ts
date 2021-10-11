import { createAction, props } from "@ngrx/store";

interface ITodo {
  text: string;
}

export const create = createAction('[TODO] Create', props<ITodo>());
export const toggle = createAction('[TODO] Toggle', props<{id: number}>());
export const edit = createAction('[TODO] Edit', props<{id: number, text: string}>());
export const deleteTodo = createAction('[TODO] Delete', props<{id: number}>());
export const toggleAll = createAction('[TODO] Toggle All', props<{completed: boolean}>());
