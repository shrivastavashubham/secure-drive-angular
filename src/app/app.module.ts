import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthServiceService} from "./services/auth-service.service";
import {AccountService} from "./services/account.service";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlPermission } from "app/urlPermisssion/url.permission";
import { SignupComponent } from './signup/signup.component';
import { HttpModule } from "@angular/http";
import {QuestionsService} from "./services/questions.service";
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ChangeComponent } from './change/change.component';
import { VerifyComponent } from './verify/verify.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    FaqComponent,
    AboutusComponent,
    ContactComponent,
    ChangeComponent,
    VerifyComponent,
    VerifyUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpModule,FormsModule,
     
  ],
  providers: [AuthServiceService,AccountService,UrlPermission, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
