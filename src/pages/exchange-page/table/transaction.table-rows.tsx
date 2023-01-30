import React from 'react';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { upperFirstLetter } from '../../../components/parsers/upper-first-letter';

export function TransactionTableRows(transactions: TransactionInterface[]) {
  return transactions.map((transaction: TransactionInterface) => {
    return (
      <tr data-id={transaction.id} key={transaction.id}>
        <td>{transaction.id}</td>
        <td>{String(transaction.createTime)}</td>
        <td>{String(transaction.changeTime)}</td>
        <td className={transaction.side.toLowerCase() === 'sell' ? 'cell_sell' : 'cell_buy'}>
          {upperFirstLetter(String(transaction.status))}
        </td>
        <td className={transaction.side.toLocaleLowerCase() == 'sell' ? 'cell_sell' : 'cell_buy'}>
          {upperFirstLetter(transaction.side)}
        </td>
        <td className={transaction.side.toLocaleLowerCase() == 'sell' ? 'cell_sell' : 'cell_buy'}>
          {transaction.price}
        </td>
        <td className={transaction.side.toLocaleLowerCase() == 'sell' ? 'cell_sell' : 'cell_buy'}>
          {transaction.amount}
        </td>
        <td>{transaction.instrument.toUpperCase()}</td>
      </tr>
    );
  });
}
