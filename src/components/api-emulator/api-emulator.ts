import { messageType } from '../../pages/exchange-page/enums/exchange.enums';
import { prices } from '../../mock-data/prices';
import { transactions } from '../../mock-data/transactions';
import { MessageInterface } from '../../interfaces/message.interface';
import { TransactionInterface } from '../../pages/exchange-page/interfaces/transaction.interface';

export const ApiEmulator = (message: MessageInterface): MessageInterface => {
  switch (message.messageType) {
    case messageType.Instrument: {
      return { messageType: 0, message: sendPrices(message.message) };
    }
    case messageType.GetData: {
      return { messageType: 1, message: sendTransactions() };
    }
    case messageType.PostData: {
      return { messageType: 2, message: postTransaction(message.message) };
    }
    case messageType.UpdateData: {
      return { messageType: 3, message: updateTransaction(message.message) };
    }

    default: {
      return { messageType: 10, message: 'error' };
    }
  }
};

function sendPrices(message: any) {
  return prices.find((item) => item.instrument === message.instrument);
}

function sendTransactions() {
  return transactions;
}

function postTransaction(message: TransactionInterface) {
  const obj = {
    id: transactions.length + 1,
    createTime: String(new Date()),
    changeTime: String(new Date()),
    status: 'active',
    amount: message.amount,
    price: message.price,
    side: message.side,
    instrument: message.instrument
  };
  return transactions.push(obj);
}

function updateTransaction(message: any) {
  return transactions.find((item) => {
    if (item.id === message.id) {
      item.status = 'canceled';
      item.changeTime = String(new Date());
    }
  });
}
