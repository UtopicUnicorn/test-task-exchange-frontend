import { ApiEmulator } from '../../../components/api-emulator/api-emulator';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { messageType } from '../../../shared/enums/exchange.enums';
import { MessageInterface } from '../../../interfaces/message.interface';

export const TransactionsService = {
  getTransactions: function (): TransactionInterface[] {
    const req = { messageType: messageType.GetData, message: '' };
    const data = ApiEmulator(req);
    return data?.message;
  },

  cancelTransaction: function (transactionId: number | undefined): MessageInterface {
    if (typeof transactionId === 'undefined') {
      console.log('error');
    }
    const req = { messageType: messageType.UpdateData, message: { id: transactionId } };
    return ApiEmulator(req);
  }
};
