import { instance } from '../../src/api/api.interceptor';
import {
  IProduct,
  TypeProductData,
  TypeProductDataFilters,
} from '../../src/types/product.interface';

const PRODUCT = 'product';

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
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

  async getBySlug(slug: string) {
    return instance<IProduct>({
      url: `${PRODUCT}/by-slug/${slug}`,
      method: 'GET',
    });
  },

  async getByCategory(categorySlug: string) {
    return instance<IProduct[]>({
      url: `${PRODUCT}/by-category/${categorySlug}`,
      method: 'GET',
    });
  },

  async getById(id: string | number) {
    return instance<IProduct[]>({
      url: `${PRODUCT}/${id}`,
      method: 'GET',
    });
  },

  async create() {
    return instance<IProduct>({
      url: PRODUCT,
      method: 'POST',
    });
  },

  async update(id: number | string, data: TypeProductData) {
    return instance<IProduct>({
      url: `${PRODUCT}/${id}`,
      method: 'PUT',
      data,
    });
  },

  async delete(id: number | string) {
    return instance<IProduct>({
      url: `${PRODUCT}/${id}`,
      method: 'DELETE',
    });
  },
};
