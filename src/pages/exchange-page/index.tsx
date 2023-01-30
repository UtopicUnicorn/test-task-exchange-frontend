import React, { useState } from 'react';
import { CustomTable } from '../../components/table/custom-table';
import { transactionsTableHeaders } from './table/transactions.table-headers';
import { TransactionTableRows } from './table/transaction.table-rows';
import { transactions } from '../../mock-data/transactions';
import './exchange.styles.css';
import ModalWindow from '../../components/modal-window/modal-window';
import Ticker from './ticker/ticker';

export default function ExchangePage() {
  const [modal, setModal] = useState(false);

  return (
    <div className="exchange_container">
      <div>
        <h1>Welcome to our exchange portal</h1>
      </div>
      <div className="content_block">
        <div className="work_buttons">
          <button onClick={() => setModal(true)}>Call ticker</button>
        </div>

        <div className={'table_block'}>
          <CustomTable
            header={transactionsTableHeaders}
            template={TransactionTableRows(transactions)}
          />
        </div>
      </div>
      <ModalWindow active={modal} setActive={setModal}>
        <Ticker />
      </ModalWindow>
    </div>
  );
}
