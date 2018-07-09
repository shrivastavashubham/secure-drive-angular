import { Injectable } from '@angular/core';
import { Http, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { folder } from "../model/model.folder";
import 'rxjs/add/operator/toPromise';
import { Headers } from '@angular/http';

@Injectable()
export class FolderService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private folderUrl = '/api/folder';


   getFolders(): Promise<folder[]> {
    return this.http.get(this.folderUrl + "/getRoot")
      .toPromise()
      .then(response => response.json() as folder[])
      .catch(this.handleError);
  }


  getFolder(id: number): Promise<folder> {
    const url = `${this.folderUrl}/getFolder${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as folder)
      .catch(this.handleError);
  }



  createFolder(folder: folder): Promise<folder> {
    return this.http
      .post(this.folderUrl + "/addFolder", JSON.stringify(folder), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as folder)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
