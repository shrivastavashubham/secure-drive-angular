import { Injectable } from '@angular/core';
import { Http, ResponseContentType, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';



@Injectable()
export class FileService {

  constructor(public http: HttpClient) { }
  private DOCUMENT_API_PATH= '/api/getDocument';
  
  // download(documentId: string): Observable<any> {
  //   // set headers for the file and response to be Blob
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });
  //   options.responseType = ResponseContentType.Blob;

  //   return this.http.get(`${this.DOCUMENT_API_PATH}/${documentId}`, options)
  //     .map((res: Response) => res)
  //     .catch(this.handleError);
  // }
  // // handle error
  // private handleError (error: any) {
  //   return Observable.throw(error);
  // }


  
}
