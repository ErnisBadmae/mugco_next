import { instance } from '../../src/api/api.interceptor';
import { IPaymentResponse } from '../../src/types/payment.interface';

const PAYMENT = 'payment';

export const PaymentService = {
  async createPayment(amount: number) {
    return instance.post<IPaymentResponse>(PAYMENT, {
      amount,
    });
  },
};
