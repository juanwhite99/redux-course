import { createAction, props } from "@ngrx/store";

interface ITodo {
  text: string;
}

export const create = createAction('[TODO] Create', props<ITodo>());
