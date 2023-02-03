import { AnyAction } from 'redux';

export const priceInitialState = {
  buy: 0,
  sell: 0
};

export const pricesReducer = (state = priceInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'CHANGE_PRICE': {
      return {
        ...state,
        ...action.pauload
      };
    }
    default: {
      return state;
    }
  }
};
