import { Injectable } from '@angular/core';
import { Http, ResponseContentType, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {file} from "../model/model.file";
import 'rxjs/add/operator/toPromise';
import {Headers} from '@angular/http';

@Injectable()
export class FileService {
  // currentFile: File;

  // constructor(public http: HttpClient) { }
  // private DOCUMENT_API_PATH= '/api/files/getFile';
  
  //  download(documentId: string): Observable<any> {
  //    //set headers for the file and response to be Blob
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

constructor(private http: Http) {
 
  }
 
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private FilesUrl = 'api/files';

 
 
  getFile(id: number): Promise<file> {
    const url = `${this.FilesUrl}/getFile${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as file)
      .catch(this.handleError);
  }
 
 
  createFile(file: file): Promise<file> {
    return this.http
      .post(this.FilesUrl + "/addFile", JSON.stringify(file), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as file)
      .catch(this.handleError);
  }
 
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

