import { Action } from '@ngrx/store';
import { ChatMessage } from '../chat-message.model';

export const LOAD = '[Chat] Load';
export const LOAD_SUCCESS = '[Chat] Load Success';
export const LOAD_FAIL = '[Chat] Load Fail';
export const NEW_MESSAGE = '[Chat] New Message';
export const NEW_MESSAGE_SUCCESS = '[Chat] New Message Success';

/**
 * Load Chat Actions
 */
export class NewMessageAction implements Action {
  readonly type = NEW_MESSAGE;

  constructor( public payload : string ) {
  }
}

export class NewMessageSuccessAction implements Action {
  readonly type = NEW_MESSAGE_SUCCESS;

  constructor( public payload : ChatMessage ) {
  }
}


export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor( public payload : any ) {
  }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor( public payload : any ) {
  }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | NewMessageAction
  | NewMessageSuccessAction;
