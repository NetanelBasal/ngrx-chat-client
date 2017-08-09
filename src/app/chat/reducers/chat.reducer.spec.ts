import { reducer } from '../reducers/chat.reducer';
import * as fromChat from '../reducers/chat.reducer';

describe('ChatReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromChat.initialState);
    });
  });

});