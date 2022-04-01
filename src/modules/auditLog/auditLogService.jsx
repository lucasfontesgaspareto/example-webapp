import authAxios from '../shared/axios/authAxios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class AuditLogService {
  static async fetch(filter, orderBy, limit, offset) {
    const query = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/audit-log`,
      {
        params: query,
      },
    );

    return response.data;
  }
}
