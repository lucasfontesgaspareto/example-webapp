import listActions from '../list/securityRoleListActions';
import SecurityRoleService from '../securityRoleService';
import Errors from '../../shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../store';
import Message from '../../../view/shared/message';

const prefix = 'SECURITYROLE_DESTROY';

const securityRoleDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: securityRoleDestroyActions.DESTROY_STARTED,
      });

      await SecurityRoleService.destroyAll([id]);

      dispatch({
        type: securityRoleDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.securityRole.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/security-role');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: securityRoleDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: securityRoleDestroyActions.DESTROY_ALL_STARTED,
      });

      await SecurityRoleService.destroyAll(ids);

      dispatch({
        type: securityRoleDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.securityRole.destroyAll.success'),
      );

      getHistory().push('/security-role');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: securityRoleDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default securityRoleDestroyActions;
