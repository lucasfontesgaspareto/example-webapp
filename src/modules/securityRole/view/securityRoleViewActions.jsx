import SecurityRoleService from '../securityRoleService';
import Errors from '../../shared/error/errors';
import { getHistory } from '../../store';

const prefix = 'SECURITYROLE_VIEW';

const securityRoleViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: securityRoleViewActions.FIND_STARTED,
      });

      const record = await SecurityRoleService.find(id);

      dispatch({
        type: securityRoleViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: securityRoleViewActions.FIND_ERROR,
      });

      getHistory().push('/security-role');
    }
  },
};

export default securityRoleViewActions;
