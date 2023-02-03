import React from 'react';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { upperFirstLetter } from '../../../components/parsers/upper-first-letter';
import { TransactionsService } from '../services/transactions.service';
import { instrumentsNames } from '../../../shared/shared-objects';
import { statusEnum } from '../../../shared/enums/text.enum';

export function TransactionTableRows(transactions: TransactionInterface[], { updateData }: any) {
  const cancelTransaction = (id: number | undefined) => {
    const res = TransactionsService.cancelTransaction(id).message;
    updateData(res);
  };

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
        {transaction.status === statusEnum.active ? (
          <td>
            <button onClick={() => cancelTransaction(transaction.id)}>Cancel</button>
          </td>
        ) : (
          <td />
        )}
      </tr>
    );
  });
}
