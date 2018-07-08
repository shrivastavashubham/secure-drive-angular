import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {User} from "../model/model.user";
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
 currentUser: User;
  constructor(public AuthServiceService: AuthServiceService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


  }

  ngOnInit() {
  }

// login out from the app
  logOut() {
    this.AuthServiceService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {

        });
  }
}
