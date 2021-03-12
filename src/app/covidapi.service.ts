import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private httpClient: HttpClient) { }

  public getCovid(): any {
    return this.httpClient.get(`http://localhost:8081/covid/mining/my`, { responseType: 'text' });
  }

  public getCovidDesc(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/desc`);
  }

  public deleteDesc(id: number): Promise<any> {

    return new Promise((resolve) => {
    return this.httpClient.delete(`http://localhost:8081/covid/delete?id=` + id).subscribe((data: any) => {
    console.log(data); 
    resolve(data);
      
     })
    });
  }

  public addDesc(desc: string): Promise<any> {

    return new Promise((resolve) => {
    return this.httpClient.get(`http://localhost:8081/covid/add?desc=` + desc).subscribe((data: any) => {
    console.log(data); 
    resolve(data);
      
     })
    });
  }

}
