import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'callback',
  template: `<p>Loading...</p>`
})

export class CallbackComponent implements OnInit {
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.handleAuthentication();
  }
}
