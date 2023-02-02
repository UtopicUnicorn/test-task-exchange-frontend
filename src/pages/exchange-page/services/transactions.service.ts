import { ApiEmulator } from '../../../components/api-emulator/api-emulator';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { transactions } from '../../../mock-data/transactions';
import { messageType } from '../enums/exchange.enums';

export const TransactionsService = {
  getTransactions: function (): TransactionInterface[] {
    const req = { messageType: messageType.GetData, message: '' };
    const data = ApiEmulator(req);
    return data?.message;
  },

  cancelTransaction: function (transactionId: number | undefined) {
    if (typeof transactionId === 'undefined') {
      console.log('error');
    }
    const req = { messageType: messageType.UpdateData, message: { id: transactionId } };
    ApiEmulator(req);
  }
};
