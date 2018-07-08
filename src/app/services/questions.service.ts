import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
@Injectable()
export class QuestionsService {

  constructor(public http: Http) { }
 createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/api/user/addUser',user)
      .map(resp=>resp.json());
  }

}
