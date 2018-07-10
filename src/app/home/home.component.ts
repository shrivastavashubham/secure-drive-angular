import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {User} from "../model/model.user";
import {Router} from "@angular/router";
import { FaqComponent } from '../faq/faq.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactComponent } from '../contact/contact.component';
import { ChangeComponent } from '../change/change.component';
import { VerifyComponent } from '../verify/verify.component';
import { UploadFileService } from '../services/upload-file.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { FormsModule } from '@angular/forms';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
 currentUser: User;
  httpService: any;
  FolderList: string[];
  selected = null;
  constructor(public AuthServiceService: AuthServiceService, public router: Router, public uploadService: UploadFileService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

   	
  }

  ngOnInit() {
    //For dropdown
    // this.httpService.get('http://localhost:8080/api/folder/getroot').subscribe(
    //   data => {
    //     this.FolderList = data as string [];		// FILL THE ARRAY WITH DATA.
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );
    // getFiles(user.id)
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
  //upload or view
  selectedFiles: FileList;
   currentFileUpload: File;
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }
  	

 
}
