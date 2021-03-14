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

  }


getBookSize(size: number) {
  let i : number = size
  return i;
}

getMasterData(): Promise<any> {

    return new Promise((resolve) => {

      this.http.get<any>('http://localhost:8080/books').subscribe({
        next: data => {

          let array = data;
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

  for (var i = 0; i < this.books.length; i++) {
    this.books[i];
    let book = this.books[i];
    let isBookMatching = book.name === this.selectedBook[0];
    if (isBookMatching) 
    {
      this.book = this.books[i];
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
      //  this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
});

}

}
