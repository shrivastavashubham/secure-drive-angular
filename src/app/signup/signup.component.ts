import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../model/model.user";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Questions} from "../model/model.Questions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
 user: User = new User();
 Questions: Questions=new Questions();
 
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router,
  public QuestionsService:QuestionsService) { }

  ngOnInit() {
  }



  register() {
    this.accountService.createAccount(this.user).subscribe(data => {
      this.QuestionsService.FillQuestions(this.Questions)
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}