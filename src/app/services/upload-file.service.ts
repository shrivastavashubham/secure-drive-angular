import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UploadFileService {
    constructor(public http: HttpClient) {}
    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData = new FormData();
      formdata.append('file', file);
      const req = new HttpRequest('POST', 'http://localhost:8089/api/files/addFile', formdata, {
        reportProgress: true,
        responseType: 'text'
      }
      );
      return this.http.request(req);
    }
  }

