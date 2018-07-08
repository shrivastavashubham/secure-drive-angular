import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SignupComponent} from './signup/signup.component'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UrlPermission} from "./urlPermisssion/url.permission";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // otherwise redirect to Home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


