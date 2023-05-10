import { instance } from '../../src/api/api.interceptor';
import { ICategory } from '../../src/types/category.interface';
import { IUser } from '../../src/types/user.interface';

const USERS = 'users';

type TypeData = {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
};

export const UserService = {
  async getProfile() {
    return instance<IUser[]>({
      url: `${USERS}/profile`,
      method: 'GET',
    });
  },

  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `${USERS}/profile/`,
      method: 'PUT',
      data,
    });
  },

  async toggleFavorite(productId: number | string) {
    return instance<IUser>({
      url: `${USERS}/profile/favorites/${productId}`,
      method: 'PATCH',
    });
  },
};
