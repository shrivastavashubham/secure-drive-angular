import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import { Question } from '../model/model.Question';
@Injectable()
export class AccountService {

  constructor(public http: Http) { }
 createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/api/user/signup',user)
      .map(resp=>resp.json());
  }

  getQuestions(){
    return this.http.get(AppComponent.API_URL+'/api/user/security').map(res=>res.json().body);
  }

}
