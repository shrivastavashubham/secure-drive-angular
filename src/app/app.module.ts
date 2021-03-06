import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthServiceService} from "./services/auth-service.service";
import {AccountService} from "./services/account.service";
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
import { UploadFileService } from './services/upload-file.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './services/file.service';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpModule,FormsModule,HttpClientModule
     
  ],
  providers: [AuthServiceService,AccountService,UrlPermission, QuestionsService, UploadFileService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
