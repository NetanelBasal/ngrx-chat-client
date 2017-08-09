import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../chat-message.model';

@Injectable()
export class ChatService {

  constructor( private http : Http ) {
  }

  get() : Observable<any> {
    return this.http.get('http://localhost:3000/messages');
  }

  post( message : ChatMessage ) : Observable<any> {
    return this.http.post('http://localhost:3000/message', message);
  }

}
