import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa',
  providers: [HttpClient ],
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  config: any;
  public books:any;
  public book:any;
  public selectedBook: any;
  public totalSales: any;
  public lastBookName: any;

  constructor(
    public handler: HttpHandler,
    public http: HttpClient) {
    this.config = {
        animated: true,
        keyboard: true,
        backdrop: 'static'
    };

    this.selectedBook = "test";
  
}
  ngOnInit(): void {
    // init
  }


getBookSize(size: number) {
  return size;
}

getMasterData(): Promise<any> {

    return new Promise((resolve) => {

      this.http.get<any>('http://localhost:8080/books').subscribe({
        next: data => {
          this.books = data;
           console.log('success');
        },
        error: error => {
            console.error('  There was an error!', error);
        }
    })
    });
}

onSelectBook() {

  for (let book of this.books) {
    let isBookMatching = book.name === this.selectedBook[0];
    if (isBookMatching) 
    {
      this.book = book;
    }
  }

}


getTranscationLastBook(): Promise<any> {

  return new Promise((resolve) => {

    this.http.get<any>('http://localhost:8081/last-book').subscribe({
      next: data => {

         this.lastBookName = data.name;
         console.log('success');
      },
      error: error => {
          console.error('There was an error!', error);
      }
  })
  });
}

updateTransactionData() {

   let headers = { 'content-type': 'application/json'}  
   this.http.post('http://localhost:8081/buy-book', this.book,{'headers':headers}).subscribe({
    next: data => {
        let totalSales = data;
        this.totalSales = totalSales;

    },
    error: error => {
        console.error('There was an error!', error);
    }
});

}

}
