import { createAction, props } from '@ngrx/store';

export const loadChart = createAction('[Chart] Load Chart');

export const loadChartSuccess = createAction(
  '[Chart] Load Chart Success',
  props<{ user: { id: string; name: string; email: string } }>()
);

export const loadChartFailure = createAction(
  '[Chart] Load Chart Failure',
  props<{ error: any }>()
);
