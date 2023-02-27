import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppState} from "./app-state/app-state";
import {Store} from "@ngrx/store";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'college-enrollment-system';


  constructor(
    private store: Store<AppState>,
    private router: Router,
    private auth: AngularFireAuth
  ) {

    this.auth.onAuthStateChanged((value) => {
      if (value) {
        this.router.navigate(['/dashboard/students'])
      } else {
        this.router.navigate(['/auth/login']);
      }
      console.log(value?.toJSON());
    });

    // this.store.select(profileState).pipe(
    //   takeWhile(value => value === 'pending')
    // ).subscribe((state) => {
    //   this.store.dispatch(fetchProfile());
    // });
    // this.store.select(profileState).pipe(
    //   filter(value => value === 'error')
    // ).subscribe(value => {
    //   this.router.navigate(['/auth/login']).then(r => {
    //   });
    // });
  }
}
