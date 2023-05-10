import { instance } from '../../src/api/api.interceptor';
import { IOrder } from '../../src/types/order.interface';

const ORDERS = 'orders';

export const OrderService = {
  async getAll() {
    return instance<IOrder[]>({
      url: ORDERS,
      method: 'GET',
    });
  },
};
