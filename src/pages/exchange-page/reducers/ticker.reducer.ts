import { AnyAction } from 'redux';
import { instruments } from '../ticker/selector/selector.constants';

export const tickerInitialState = {
  instrument: instruments[0],
  amount: 100,
  price: 0,
  side: ''
};

export const tickerReducer = (state = tickerInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_TRANSACTION': {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};
