import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('admin@admin.com'),
    password: new FormControl('password'),
  })

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls.email.value ?? '';
      const password = this.loginForm.controls.password.value ?? '';
      this.auth.signInWithEmailAndPassword(
        email,
        password,
      ).then(value => {
        console.log(value.user?.email);
        this.router.navigate(['/dashboard/students']);
      });
    }
  }

}
