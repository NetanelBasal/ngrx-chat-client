import { Component, OnInit } from '@angular/core';
import { AppState } from './store';
import { Action, ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from './chat/chat-message.model';
import * as actions from './chat/actions/chat.actions';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  messages$ : Observable<ChatMessage[]>;
  addMessageSuccess$ : Observable<Action>;

  constructor( private store : Store<AppState>, private appActions : ActionsSubject ) {
  }

  ngOnInit() {
    this.store.dispatch({type: 'SET_USER'});
    this.messages$ = this.store.select(state => state.chat.entities);
    this.addMessageSuccess$ = this.appActions.filter(action => action.type === actions.NEW_MESSAGE_SUCCESS);
  }

  onMessage( message ) {
    this.store.dispatch(new actions.NewMessageAction(message));
  }

}
