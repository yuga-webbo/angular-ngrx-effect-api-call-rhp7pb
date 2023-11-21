import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromFeature from "../actions/actions";
import { exhaustMap, map, catchError, tap } from "rxjs/operators";
import { ApiService } from "../../api.service";
import { EMPTY, combineLatest } from "rxjs";
@Injectable()
export class FeatureEffects {

  // submit object with props
  // => use object props to call HTTP service
  // => 
  getId$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromFeature.requestId),
        map(action => action.obj),
        exhaustMap(
          (obj) => combineLatest([this.service.getOb1(obj), this.service.getOb2()]).pipe(
            map(([first, second]) => ({first, second})),
            map(resp => fromFeature.setData({data: resp}))
          )
        )
      )
  );
  constructor(private actions$: Actions, private service: ApiService) {}
}
