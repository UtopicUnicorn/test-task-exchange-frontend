import { combineReducers } from 'redux';
import { tickerReducer } from './pages/exchange-page/reducers/ticker.reducer';
import { pricesReducer } from './pages/exchange-page/reducers/price.reducer';
import { authReducer } from './pages/auth/reducers/auth.reducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  ticker: tickerReducer,
  prices: pricesReducer,
  auth: authReducer
});

export default rootReducer;
