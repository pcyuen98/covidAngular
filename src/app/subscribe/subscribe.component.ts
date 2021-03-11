import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/model/Person';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html'
})
export class SubscribeComponent implements OnInit {

  constructor(public http: HttpClient) { }
  person: Person = new Person();
  persons: any = [];

  ngOnInit(): void {
    this.getJson();
  }

  getJson() {

    this.http.get('json/get', { responseType: 'json' }).subscribe({
      next: data => {

        console.log('data-->' + data);
        this.persons = data;
        console.log("JSON object -", this.persons.length);
        console.log('length-->' + this.persons.length);
      }
    });

  }

  postJson() {

    this.http.post('json/post', this.person, { responseType: 'json' }).subscribe((data) => {
    this.persons = data;

      console.log('person length-->' + this.persons.length);
    });

  }
}
