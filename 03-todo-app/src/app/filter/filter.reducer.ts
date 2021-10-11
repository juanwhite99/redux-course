import { Action, createReducer, on, State } from '@ngrx/store';
import * as actions from '../filter/filter.actions';

// const initialState: actions.filterTypes = 'all';
const initialState: string = 'all';

export const _filterReducer = createReducer(initialState,
  on(actions.setFilter, (state, {filter}) => filter ),
);

export function filterReducer(state: string | undefined, action: Action) {
  return _filterReducer(state, action);
}
