import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';
import {
  map
} from "rxjs/operators";

import {OpengraphInterface} from './opengraph-interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkPreviewService {
  apiKey = environment.apiKey;
  token = environment.token;
  constructor(private http: HttpClient) { }
  gethttp(urlHtml: string) : Observable<OpengraphInterface> {
    let url = this.apiKey+urlHtml
    let headers = {'Authorization': this.token};
    return this.http.get<OpengraphInterface>(url, {headers: headers})
            .pipe(
               map((resp: OpengraphInterface) => {
                  return resp;
               })
            );
  }
}
