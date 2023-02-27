import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  email: string | null | undefined = '';
  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {
    this.auth.user.subscribe(value => {
      this.email = value?.email;
    })
  }


  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut().then(r => {
      this.router.navigate(['/auth/login']);
    })
  }
}
