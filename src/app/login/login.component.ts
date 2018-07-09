import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import {User} from "../model/model.user";
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
 user: User=new User();
  errorMessage:string;
  constructor(private AuthServiceService :AuthServiceService, private router: Router) { }

  ngOnInit() {
  }


  login(){
    this.AuthServiceService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/home']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
      // this.router.navigate(['/home']);
  
}
}
