import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'college-enrollment-system';


  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ) {

    this.auth.onAuthStateChanged((value) => {
      if (value) {
        this.router.navigate(['/dashboard/students'])
      } else {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
