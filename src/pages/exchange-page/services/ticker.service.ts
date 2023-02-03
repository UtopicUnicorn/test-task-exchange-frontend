import { ApiEmulator } from '../../../components/api-emulator/api-emulator';
import { messageType } from '../../../shared/enums/exchange.enums';
import { TransactionInterface } from '../interfaces/transaction.interface';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { MessageInterface } from '../../../interfaces/message.interface';

export const TickerService = {
  getInstrument: function (message: string): InstrumentInterface {
    const req = { messageType: messageType.Instrument, message: { instrument: message } };
    const data = ApiEmulator(req);
    return data?.message;
  },

  sendData: function (message: TransactionInterface): MessageInterface {
    const req = { messageType: messageType.PostData, message: message };
    return ApiEmulator(req);
  }
};
