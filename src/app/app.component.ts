import {Component} from '@angular/core';
import {filter, takeWhile} from "rxjs";
import {profileState} from "./app-state/profile/profile.selector";
import {Router} from "@angular/router";
import {AppState} from "./app-state/app-state";
import {Store} from "@ngrx/store";
import {fetchProfile} from "./app-state/profile/profile.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'college-enrollment-system';


  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.store.select(profileState).pipe(
      takeWhile(value => value === 'pending')
    ).subscribe((state) => {
      this.store.dispatch(fetchProfile());
    });
    this.store.select(profileState).pipe(
      filter(value => value === 'error')
    ).subscribe(value => {
      this.router.navigate(['/auth/login']).then(r => {
      });
    });
  }
}
