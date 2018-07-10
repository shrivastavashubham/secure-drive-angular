import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../model/model.user";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";

import { FormsModule } from '@angular/forms';
import { Question } from '../model/model.Question';
import { UserSecurityQuestion } from '../model/model.UserSecurityQuestion';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
 user: User = new User();
 listOfAnswers : Array<String>=[];
 listOfQuestion :Question[]=[]
  errorMessage: string;
   question : UserSecurityQuestion[]=[]

  constructor(public accountService: AccountService, public router: Router,
  public QuestionsService:QuestionsService) {
    this.accountService.getQuestions().subscribe((s:Question[])=>this.listOfQuestion=s);
     
  }

  ngOnInit() {
    

    console.log(this.listOfQuestion)

  }



  register() {
    console.log(this.listOfAnswers)
    let count:number =0;
    let countChar = String(count)
        this.listOfQuestion.forEach((x:any)=>
    { 
      countChar = String(count)
      console.log(JSON.stringify(x.cou))
      console.log(x.countChar)
      let question : UserSecurityQuestion= new UserSecurityQuestion();
      question.Question.id=x.id
      question.Question.question=x.question
      question.answer= x[countChar];
      count++
    this.question.push(question)    })

    this.user.listOfQuestion=this.question
    
    this.accountService.createAccount(this.user).subscribe(data => {
    //  this.QuestionsService.FillQuestions(this.Questions)
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}