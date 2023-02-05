import { UserInterface } from '../interfaces/user.interface';
import { ApiEmulator } from '../../../components/api-emulator/api-emulator';
import { messageType } from '../../../shared/enums/exchange.enums';

export const AuthService = {
  signIn: function (user: UserInterface) {
    const req = { messageType: messageType.SignIn, message: user };
    return ApiEmulator(req);
  }
};
