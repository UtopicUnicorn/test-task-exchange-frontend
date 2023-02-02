import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import './ticker.style.css';
import { instruments } from './selector/selector.constants';
import { TickerService } from '../services/ticker.service';
import { instrumentsNames } from '../../../shared/shared-objects';
import { tickerInitialState } from '../reducers/ticker.reducer';

export default function Ticker() {
  const dispatch = useDispatch();

  //tmp initial state for prices
  const pricesInitialState = {
    sell: 80,
    buy: 69
  };
  const [prices, setPrices] = useState(pricesInitialState);

  useEffect(() => {
    const data = TickerService.getInstrument(form.instrument).price;
    setPrices(data);
  }, []);

  const [form, setForm] = useState(tickerInitialState);

  const sendData = (obj: any) => {
    TickerService.sendData(obj);
  };

  //handle form input
  const handleInputChange = (ev: BaseSyntheticEvent) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
    dispatch({ type: 'NEW_TRANSACTION', payload: { [ev.target.name]: ev.target.value } });
  };

  //set instrument and get current prices
  const handleInstrumentChange = (ev: BaseSyntheticEvent) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
    const data = TickerService.getInstrument(ev.target.value).price;
    dispatch({ type: 'NEW_TRANSACTION', payload: { [ev.target.name]: ev.target.value } });
    setPrices(data);
  };

  //in future move to selector directory
  const instrumentOptions = instruments.map((item: string, index) => {
    return (
      <option key={index} value={item}>
        {instrumentsNames.find((name) => item === name.id)?.value.toUpperCase()}
      </option>
    );
  });

  //handle submit and send message
  const handleSubmit = (side: string, price: number) => {
    const newTransaction = {
      ...form,
      side: side,
      price: price
    };

    setForm(newTransaction);
    sendData(newTransaction);

    dispatch({ type: 'NEW_TRANSACTION', payload: newTransaction });
  };

  return (
    <div>
      <form className="ticker_container">
        <div className="instrument_select_block">
          <select name="instrument" value={form.instrument} onChange={handleInstrumentChange}>
            {instrumentOptions}
          </select>
        </div>
        <div className="amount_input_block">
          <label>Amount</label>
          <input name="amount" value={form.amount} onChange={handleInputChange} />
        </div>
        <div className="side_select_block">
          <div className="side_block">
            <input disabled={true} value={prices.sell} />
            <button
              className="ticker_sell_button"
              type="button"
              onClick={() => handleSubmit('sell', prices.sell)}>
              Sell
            </button>
          </div>
          <div className="side_block">
            <input disabled={true} value={prices.buy} />
            <button
              className="ticker_buy_button"
              type="button"
              onClick={() => handleSubmit('buy', prices.buy)}>
              Buys
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
