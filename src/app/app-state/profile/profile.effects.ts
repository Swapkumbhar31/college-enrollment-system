import {Injectable} from "@angular/core";
import {ActionsSubject, Store,} from "@ngrx/store";
import {AppState} from "../app-state";
import {createEffect, ofType} from "@ngrx/effects";
import {fetchProfile, fetchProfileFailure, fetchProfileSuccess, logoutUser} from "./profile.actions";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProfile),
      switchMap(() =>
        from(this.auth.currentUser)
          .pipe(
            map((data: any) => {
              console.log(data);
              if (data) {
                return fetchProfileSuccess({user: data});
              }
              return fetchProfileFailure({error: "Not logged in"});
            }),
            catchError(error => of(fetchProfileFailure({error})))
          )
      )
    );
  },);

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutUser),
      tap(value => {
        console.log("logoutUser$", value);
        localStorage.clear();
      })
    );
  }, {dispatch: false});

  constructor(
    private actions$: ActionsSubject,
    private store: Store<AppState>,
    public auth: AngularFireAuth,
  ) {
  }
}
