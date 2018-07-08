import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {Questions} from "../model/model.Questions";

@Injectable()
export class QuestionsService {

  constructor(public http: Http) { }
 
  FillQuestions(Questions:Questions){
return this.http.post(AppComponent.API_URL+'/api/user/security/update',Questions)
      .map(resp=>resp.json());
  }

}
