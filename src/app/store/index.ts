import { ActionReducerMap } from '@ngrx/store';
import { chartReducer, ChartState, ChartEffects } from './chart';

export interface AppState {
  chart: ChartState;
}

export const reducers: ActionReducerMap<AppState> = {
  chart: chartReducer,
};

export const effects = [
  ChartEffects
];