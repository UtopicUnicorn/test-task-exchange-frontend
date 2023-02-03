import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import './ticker.style.css';
import { instruments } from './selector/selector.constants';
import { TickerService } from '../services/ticker.service';
import { instrumentsNames } from '../../../shared/shared-objects';
import { tickerInitialState } from '../reducers/ticker.reducer';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { priceInitialState } from '../reducers/price.reducer';

export default function Ticker({ updateData }: any) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(tickerInitialState);

  // initial state for prices
  const [prices, setPrices] = useState(priceInitialState);

  useEffect(() => {
    const data = TickerService.getInstrument(form.instrument).price;

    dispatch({ type: 'CHANGE_PRICE', payload: data });
    setPrices(data);
  }, []);

  //send data to server
  const sendData = (message: TransactionInterface) => {
    const res = TickerService.sendData(message);
    updateData(res.message);
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

  const instrumentOptions = instruments.map((item: string, index) => {
    return (
      <option key={index} value={item}>
        {instrumentsNames.find((name) => item === name.id)?.value.toUpperCase()}
      </option>
    );
  });

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
