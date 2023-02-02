import { combineReducers } from 'redux';
import { tickerReducer } from './pages/exchange-page/reducers/ticker.reducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  ticker: tickerReducer
});

export default rootReducer;
