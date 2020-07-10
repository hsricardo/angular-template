import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders ()
    .set('Content-Type', 'application/json');

  params = new HttpParams()
    .set('token', environment.token);

  public postExample(): Observable<any> {
    return this.http.post(
      '',
      {},
      {
        headers: this.headers,
        params: this.params
      }
    );
  }
}
