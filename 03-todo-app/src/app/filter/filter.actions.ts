import { createAction, props } from '@ngrx/store';

// export type filterTypes = 'all' | 'completed' | 'pending' | undefined;

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: string}>()
);
