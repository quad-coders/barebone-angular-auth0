import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from '../account-component/account.component';
import { HomeComponent } from '../home-component/home.component';
import { AuthService } from '../service/auth.service';
import { CallbackComponent } from '../callback-component/callback.component';
import { AccountGuardService } from '../service/account-guard.service';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "callback",
    component: CallbackComponent
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [AccountGuardService]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthService,
    AccountGuardService
  ],
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    AccountComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
