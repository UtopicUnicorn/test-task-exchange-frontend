import { ApiEmulator } from '../../../components/api-emulator/api-emulator';
import { messageType } from '../enums/exchange.enums';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { transactions } from '../../../mock-data/transactions';

export const TickerService = {
  getInstrument: function (message: string) {
    const req = { messageType: messageType.Instrument, message: { instrument: message } };
    const data = ApiEmulator(req);
    return data?.message;
  },

  sendData: function (message: TransactionInterface) {
    const req = { messageType: messageType.PostData, message: message };
    const data = ApiEmulator(req);
    console.log(transactions);
    console.log(data);
  }
};
