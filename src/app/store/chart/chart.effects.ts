import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadChart, loadChartSuccess, loadChartFailure } from './chart.actions';

@Injectable()
export class ChartEffects {
  constructor(private actions$: Actions) {}
}
