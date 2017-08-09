import * as chat from '../actions/chat.actions';
import { ChatMessage } from '../chat-message.model';

export interface State {
  loading : boolean;
  entities : ChatMessage[]
}

export const initialState : State = {
  loading: false,
  entities: []
}

export function reducer( state = initialState, action : chat.Actions ) : State {
  switch ( action.type ) {
    case chat.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case chat.LOAD_SUCCESS: {

      return {
        entities: action.payload,
        loading: false,
      };
    }

    case chat.NEW_MESSAGE_SUCCESS: {
      return {
        entities: [ ...state.entities, action.payload ],
        loading: false,
      };
    }


    case chat.LOAD_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
