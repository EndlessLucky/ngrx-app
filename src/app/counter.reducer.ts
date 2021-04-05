import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

// tslint:disable-next-line: typedef
export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}