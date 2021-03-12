import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../covidapi.service';
import { LocalApiService } from '../localapi.service';

@Component({
  selector: 'app-covid',
  providers: [CovidApiService],
  styleUrls: ['./covid.component.css'],
  templateUrl: './covid.component.html',

})
export class CovidComponent implements OnInit {
  public covidTotalDaily: any;
  
  public covidTotalDesc: any[] = [];

  public books: any[] = [];

  public desc:any;

  constructor(private httpClient: HttpClient, public covidApiService: CovidApiService, public localApiService: LocalApiService

  ) { }

  ngOnInit(): void {
    this.getCovid();
    this.getCovidDesc();
  }

  getCovid(): any {
    this.covidApiService.getCovid().subscribe((data: any) => {
      console.log(data); this.covidTotalDaily = data;
    });

    return this.covidTotalDaily;
  }

  getCovidDesc(): any {
    this.covidApiService.getCovidDesc().subscribe((data: any) => {
      console.log(data); 
      
      this.covidTotalDesc = data;
    });

    return this.covidTotalDesc;
  }
  
onSelectDesc() {

  console.log("desc-->"  + this.desc);
  }
}
