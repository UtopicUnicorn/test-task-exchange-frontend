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

  const [update, setUpdate] = useState({});

  //update data on start and on update in the future should change on pushing new transaction to data without new get request
  useEffect(() => getData(), [update]);

  const getData = () => {
    const data = TransactionsService.getTransactions();
    setData(data);
  };

  //connection parent component to receive changes from child components
  const updateData = (value: TransactionInterface) => {
    const newValue = {
      ...value
    };
    setUpdate(newValue);
  };

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
            template={TransactionTableRows(data, { updateData })}
          />
        </div>
      </div>
      <ModalWindow active={modal} setActive={setModal}>
        <Ticker updateData={updateData} />
      </ModalWindow>
    </div>
  );
}
