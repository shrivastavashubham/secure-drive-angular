import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../model/model.user";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
 user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) { }

  ngOnInit() {
  }



  register() {
    this.accountService.createAccount(this.user).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}