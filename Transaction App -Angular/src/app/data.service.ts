import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IData} from './data'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
private _url : string = 'http://localhost:5555/get'
private _url1 : string = 'http://localhost:5555/post'
  constructor(private http: HttpClient) { }
  getData(): Observable<IData[]>{
    return this.http.get<IData[]>(this._url);
  }
  registeruser(data) {
    return this.http.post(this._url1, data)
  }
}
