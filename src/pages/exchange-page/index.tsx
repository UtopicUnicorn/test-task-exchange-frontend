import React, { useEffect, useState } from 'react';
import { CustomTable } from '../../components/table/custom-table';
import { transactionsTableHeaders } from './table/transactions.table-headers';
import { TransactionTableRows } from './table/transaction.table-rows';
import './exchange.styles.css';
import ModalWindow from '../../components/modal-window/modal-window';
import Ticker from './ticker/ticker';
import { TransactionsService } from './services/transactions.service';
import { TransactionInterface } from './interfaces/transaction.interface';

export default function ExchangePage() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<TransactionInterface[]>([]);

  //update data on start and on modal change in the future change on backend message
  useEffect(() => setData(TransactionsService.getTransactions()), [modal]);

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
          <CustomTable header={transactionsTableHeaders} template={TransactionTableRows(data)} />
        </div>
      </div>
      <ModalWindow active={modal} setActive={setModal}>
        <Ticker />
      </ModalWindow>
    </div>
  );
}
