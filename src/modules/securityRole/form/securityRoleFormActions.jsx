import SecurityRoleService from '../securityRoleService';
import Errors from '../../shared/error/errors';
import Message from '../../../view/shared/message';
import { getHistory } from '../../store';
import { i18n } from '../../../i18n';

const prefix = 'SECURITYROLE_FORM';

const securityRoleFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: securityRoleFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SecurityRoleService.find(id);
      }

      dispatch({
        type: securityRoleFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: securityRoleFormActions.INIT_ERROR,
      });

      getHistory().push('/security-role');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: securityRoleFormActions.CREATE_STARTED,
      });

      await SecurityRoleService.create(values);

      dispatch({
        type: securityRoleFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.securityRole.create.success'),
      );

      getHistory().push('/security-role');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: securityRoleFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: securityRoleFormActions.UPDATE_STARTED,
      });

      await SecurityRoleService.update(id, values);

      dispatch({
        type: securityRoleFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.securityRole.update.success'),
      );

      getHistory().push('/security-role');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: securityRoleFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default securityRoleFormActions;
