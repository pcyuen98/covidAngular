import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {

  constructor() { 
    // constructor
  }

  ngOnInit(): void {
    // init
  }

  hello: string = 'hello world';

}
