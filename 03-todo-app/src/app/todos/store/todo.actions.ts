import { createAction, props } from "@ngrx/store";

interface ITodo {
  text: string;
}

export const create = createAction('[TODO] Create', props<ITodo>());
export const toggle = createAction('[TODO] Toggle', props<{id: number}>());
