import { instance } from '../../src/api/api.interceptor';
import { StatisticResponse } from '../../src/types/statistic.interface';

const STATISTICS = 'statistics';

export const StatisticService = {
  async getMain() {
    return instance<StatisticResponse[]>({
      url: `${STATISTICS}/main`,
      method: 'GET',
    });
  },
};
