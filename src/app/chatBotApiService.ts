import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Message } from './MessageService';

@Injectable({
  providedIn: 'root'
})
export class ChatBotApiService {

  public returnText: any;

  messages: Array<Message> = [];

  constructor(private httpClient: HttpClient) {

   }

  pushNewMessage(user: string , text: string ): void {
    const message = new Message();
    message.text = text;
    message.user = user;

    this.messages?.push(message);
  }

  public postText(text: any): any {
    const headers = { 'content-type': 'application/json' };

    // define the structure of the post request json
    const inputJson =
    {
      text
    };

    this.httpClient.post('api/chatterbot/', inputJson, { headers }).subscribe({
      next: data => {

        // define the returnObject structure
        let returnObj: any = { text: [] };
        returnObj = data;

        // tslint:disable-next-line: triple-equals

        const isObjectArray = returnObj.text instanceof Array;

        if (isObjectArray) { // return is an object array
          this.returnText = returnObj.text[0];
        }
        else {
          this.returnText = returnObj.text;
        }

        this.pushNewMessage('You', text);
        this.pushNewMessage('Bot', this.returnText);

        return this.returnText;

      },
      error: error => {
        //  this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

  }
}
