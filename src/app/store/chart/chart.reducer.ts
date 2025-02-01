import { createReducer, on } from '@ngrx/store';
import { loadChart, loadChartSuccess, loadChartFailure } from './chart.actions';

export interface ChartState {
  sym: string;
  currency: string;
  loading: boolean;
  error: any;
}

export const initialState: ChartState = {
  sym: 'btc',
  currency: 'usd',
  loading: false,
  error: null,
};

export const chartReducer = createReducer(
  initialState
);
