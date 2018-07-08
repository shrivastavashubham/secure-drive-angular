import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SignupComponent} from './signup/signup.component'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UrlPermission} from "./urlPermisssion/url.permission";
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ChangeComponent } from './change/change.component';
import { VerifyComponent } from './verify/verify.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'change', component: ChangeComponent },
  { path: 'About', component: AboutusComponent },
  { path: 'verify', component: VerifyComponent },
    { path: 'contact', component: ContactComponent }


  // otherwise redirect to Home
 /* { path: '**', redirectTo: '/login' }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


