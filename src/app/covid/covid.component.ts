import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../covidapi.service';
import { LocalApiService } from '../localapi.service';

@Component({
  selector: 'app-covid',
  providers: [CovidApiService],
  templateUrl: './covid.component.html',

})
export class CovidComponent implements OnInit {
  public covidTotalDaily: any;

  constructor(public apiService: CovidApiService, public localApiService: LocalApiService

  ) { }

  ngOnInit(): void {
    this.getCovid();
  }

  getCovid(): any {
    this.apiService.getCovid().subscribe((data) => {
      console.log(data); this.covidTotalDaily = data;
    });

    return this.covidTotalDaily;
  }

  getLocalService(): any {
    this.localApiService.getLocalWebPy().subscribe((data) => {
      console.log(data); this.covidTotalDaily = data;
    });

    return this.covidTotalDaily;
  }
}
