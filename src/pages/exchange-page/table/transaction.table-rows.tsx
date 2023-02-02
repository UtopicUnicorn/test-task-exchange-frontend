import React from 'react';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { upperFirstLetter } from '../../../components/parsers/upper-first-letter';
import { TransactionsService } from '../services/transactions.service';
import { instrumentsNames } from '../../../shared/shared-objects';

export function TransactionTableRows(transactions: TransactionInterface[]) {
  return transactions.map((transaction: TransactionInterface) => {
    return (
      <tr data-id={transaction.id} key={transaction.id}>
        <td>{transaction.id}</td>
        <td>{transaction.createTime}</td>
        <td>{transaction.changeTime}</td>
        {/*change style for cell depends on object.side value*/}
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
        <td>
          {/*search for name of the instrument in string format for display*/}
          {instrumentsNames.find((item) => item.id === transaction.instrument)?.value.toUpperCase()}
        </td>
        {transaction.status === 'active' ? (
          <td>
            <button onClick={() => TransactionsService.cancelTransaction(transaction.id)}>
              Cancel
            </button>
          </td>
        ) : (
          <td></td>
        )}
      </tr>
    );
  });
}
