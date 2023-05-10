import { instance } from '../../src/api/api.interceptor';
import {
  IProduct,
  ProductData,
  TypeDataFilters,
} from '../../src/types/product.interface';

const PRODUCT = 'product';

export const ProductService = {
  async getAll(queryData = {} as TypeDataFilters) {
    return instance<IProduct[]>({
      url: PRODUCT,
      method: 'GET',
      params: queryData,
    });
  },

  async getSimilar(productId: string | number) {
    return instance<IProduct[]>({
      url: `${PRODUCT}/similar/${productId}`,
      method: 'GET',
    });
  },

  async leave(productId: string | number, data: ProductData) {
    return instance<IProduct>({
      url: `${PRODUCT}/leave/${productId}`,
      method: 'POST',
      data,
    });
  },
};
