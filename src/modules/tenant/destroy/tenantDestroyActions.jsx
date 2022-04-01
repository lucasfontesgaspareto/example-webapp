import authActions from '../../auth/authActions';
import TenantService from '../tenantService';
import Errors from '../../shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../store';
import Message from '../../../view/shared/message';
import listActions from '../list/tenantListActions';

const prefix = 'TENANT_DESTROY';

const tenantDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tenantDestroyActions.DESTROY_STARTED,
      });

      await TenantService.destroyAll([id]);

      dispatch({
        type: tenantDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(i18n('tenant.destroy.success'));

      await dispatch(authActions.doRefreshCurrentUser());
      await dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/tenant');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tenantDestroyActions.DESTROY_ERROR,
      });
    }
  },
};

export default tenantDestroyActions;
