import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private httpClient: HttpClient) { }

  public getCovid(): Observable<string> {
    return this.httpClient.get(`http://139.99.33.99:8081/covid/mining/my`, { responseType: 'text' });
  }

}
