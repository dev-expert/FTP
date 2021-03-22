import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tabledatainterface } from './tableconvert';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {


  constructor(private _http: HttpClient) { }
  private _url = "http://localhost:1000/getL";
  private _ulr2 = "http://localhost:1000/addTransection";

  getdata(): Observable<tabledatainterface[]> {
    return this._http.get<tabledatainterface[]>(this._url)
  }

  registeruser(data1) {
    this._http.post(this._ulr2, data1).subscribe(res => {

    });
  }
}




