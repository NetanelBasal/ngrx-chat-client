import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';
import { timer } from 'rxjs/observable/timer';
import * as chat from '../actions/chat.actions';
import { ChatService } from '../services/chat.service';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';

@Injectable()
export class ChatEffects {
  constructor( private chatService : ChatService,
               private store : Store<AppState>,
               private actions$ : Actions ) {
  }

  /**
   * You can choose the polling time...
   * @type {Observable<any>}
   */
  @Effect() get$ = this.actions$
    .ofType(chat.LOAD)
    .startWith(new chat.LoadAction())
    .switchMap(_ => {
        return timer(0, 5000).switchMap(() => this.chatService.get()
          .map(res => (new chat.LoadSuccessAction(res.json())))
          .catch(() => of({type: chat.LOAD_FAIL})))
      }
    );

  @Effect() post$ = this.actions$
    .ofType(chat.NEW_MESSAGE)
    .withLatestFrom(this.store.select(s => s.user))
    .switchMap(( [ action, userName ] ) => this.chatService.post({userName, message: action[ 'payload' ]})
      .map(res => (new chat.NewMessageSuccessAction(res.json())))
    );
}
