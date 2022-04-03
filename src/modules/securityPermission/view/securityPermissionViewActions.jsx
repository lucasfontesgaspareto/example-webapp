import SecurityPermissionService from '../securityPermissionService';
import Errors from '../../shared/error/errors';
import { getHistory } from '../../store';

const prefix = 'SECURITYPERMISSION_VIEW';

const securityPermissionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: securityPermissionViewActions.FIND_STARTED,
      });

      const record = await SecurityPermissionService.find(id);

      dispatch({
        type: securityPermissionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: securityPermissionViewActions.FIND_ERROR,
      });

      getHistory().push('/security-permission');
    }
  },
};

export default securityPermissionViewActions;
