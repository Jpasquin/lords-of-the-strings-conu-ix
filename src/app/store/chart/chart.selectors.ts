import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChartState } from './chart.reducer';

// Feature selector for the UserState
export const selectChartState = createFeatureSelector<ChartState>('chart');

// Selector for the user object
export const selectChart = createSelector(
  selectChartState,
  (state: ChartState) => state
);
