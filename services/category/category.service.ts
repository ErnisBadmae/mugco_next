import { instance } from '../../src/api/api.interceptor';
import { ICategory } from '../../src/types/category.interface';

const CATEGORIES = 'categories';

export const AuthService = {
  async getAll() {
    return instance<ICategory[]>({
      url: CATEGORIES,
      method: 'GET',
    });
  },

  async getById(id: number | string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'GET',
    });
  },

  async getBySlug(slug: string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/by-slug/${slug}`,
      method: 'GET',
    });
  },

  async create() {
    return instance<ICategory>({
      url: CATEGORIES,
      method: 'POST',
    });
  },

  async update(id: number | string, name: string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'PUT',
      data: {
        name,
      },
    });
  },

  async delete(id: number | string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'DELETE',
    });
  },
};
