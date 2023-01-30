import React, { BaseSyntheticEvent, useState } from 'react';

import './ticker.style.css';
import { instruments } from './selector/selector.constants';

export default function Ticker() {
  //initial form state in future add redux and move to reducer
  const formInitialState = {
    amount: 100,
    price: 0,
    instrument: instruments[0],
    side: ''
  };

  const [form, setForm] = useState(formInitialState);

  //handle form input
  const handleInputChange = (ev: BaseSyntheticEvent) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
  };

  //in future move to selector directory
  const instrumentOptions = instruments.map((item: string, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //handle submit and send message on log form
  const handleSubmit = (side: string, price: number) => {
    setForm({
      ...form,
      side: side,
      price: price
    });
    console.log(form);
  };

  return (
    <div>
      <form className="ticker_container">
        <div className="instrument_select_block">
          <select name="instrument" value={form.instrument} onChange={handleInputChange}>
            {instrumentOptions}
          </select>
        </div>
        <div className="amount_input_block">
          <label>Amount</label>
          <input name="amount" value={form.amount} onChange={handleInputChange} />
        </div>
        <div className="side_select_block">
          <div className="side_block">
            <input disabled={true} value={9.11} />
            <button
              className="ticker_sell_button"
              type="button"
              onClick={() => handleSubmit('sell', 9.11)}>
              Sell
            </button>
          </div>
          <div className="side_block">
            <input disabled={true} value={9.14} />
            <button
              className="ticker_buy_button"
              type="button"
              onClick={() => handleSubmit('buy', 9.21)}>
              Buy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
