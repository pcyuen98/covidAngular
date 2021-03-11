import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  constructor(private httpClient: HttpClient) { }

  public getLocalWebPy(): Observable<string> {
    return this.httpClient.get(`http://localhost:8080/`, { responseType: 'text' });
  }

}
