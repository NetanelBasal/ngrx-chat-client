import * as fromChat from './chat/reducers/chat.reducer';

export interface AppState {
  chat : fromChat.State;
  user : string;
}

/**
 * This should be on a seperate file
 * @param state
 * @param action
 * @returns {any}
 */
function userReducer( state, action ) {
  if ( action.type === 'SET_USER' ) {
    return navigator.userAgent.slice(-6);
  }
  return state;
}

export const store = {
  chat: fromChat.reducer,
  user: userReducer
}
