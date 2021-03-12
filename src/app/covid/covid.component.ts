import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../covidapi.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Component({
  selector: 'app-covid',
  providers: [CovidApiService],
  styleUrls: ['./covid.component.css'],
  templateUrl: './covid.component.html',

})
export class CovidComponent implements OnInit {
  public covidTotalDaily: any;
  
  public covidTotalDesc: any[] = [];

  public desc:any;

  public descObject: any;

  public newDesc: any;

  constructor(
    private httpClient: HttpClient, 
    public covidApiService: CovidApiService,
    public snackBar: MatSnackBar,
    private confirmationDialogService: ConfirmationDialogService

  ) { }

  ngOnInit(): void {
    
    this.getCovid();
    this.getCovidDesc();

    this.descObject = {};
  }

  getCovid(): any {
    this.covidTotalDaily = this.covidApiService.getCovid().subscribe((data: any) => {
      console.log(data); this.covidTotalDaily = data;
    }
    ,
     (error: { error: { message: string; }; }) => {
      console.log(error);
      this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError (error));
     } 
    );

    return this.covidTotalDaily;
  }

  getCovidDesc(): any {
    this.covidApiService.getCovidDesc().subscribe((data: any) => {
      console.log(data);       
      this.covidTotalDesc = data;
    });

    return this.covidTotalDesc;
  }
  
  onSelectDesc(desc: any) {

    console.log("desc-->"  + this.desc);
    if (this.desc[0]){
      this.descObject = this.desc[0];
      console.log("desc id-->"  + this.descObject.id);
      console.log("desc description-->"  + this.descObject.description);
    }
  }

  deleteDesc() {
    this.covidApiService.deleteDesc(this.descObject.id).then(
      resolve => {
        this.getCovidDesc();
      });
   
  }

  addDesc() {
    this.covidApiService.addDesc(this.newDesc).then(
      resolve => {
        this.getCovidDesc();
      });
  }
}
