import { getContentType } from '../../src/api/api.helper';
import { IAuthResponse } from '../../store/user/user.interface';
import { saveToStorage } from './auth.helper';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AuthService = {
  async getNewTokens() {
    const refreshToken = Cookies.get('refresh-token');

    const response = await axios.post<
      string,
      {
        data: IAuthResponse;
      }
    >(
      process.env.SERVER_URL + 'auth/login/access-token',
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      }
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },
};
