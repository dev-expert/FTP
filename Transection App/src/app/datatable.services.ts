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
}

postdata(): Observable<tabledatainterface[]> {
    return this._http.post<tabledatainterface[]>(this._ulr2 )
  }
}

