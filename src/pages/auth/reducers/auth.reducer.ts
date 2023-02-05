import { AnyAction } from 'redux';

export const authInitialState = {
  login: '',
  password: ''
};

export const authReducer = (state = authInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'SIGN_IN': {
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
