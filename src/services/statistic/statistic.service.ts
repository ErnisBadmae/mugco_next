import { instance } from '../../api/api.interceptor';
import { StatisticResponse } from '../../types/statistic.interface';

const STATISTICS = 'statistics';

export const StatisticService = {
  async getMain() {
    return instance<StatisticResponse[]>({
      url: `${STATISTICS}/main`,
      method: 'GET',
    });
  },
};
