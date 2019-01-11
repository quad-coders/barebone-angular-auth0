import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor(private router: Router, private auth: AuthService) {
  }

  public gotoAccount() {
    this.router.navigate(['account']);
  }
}
