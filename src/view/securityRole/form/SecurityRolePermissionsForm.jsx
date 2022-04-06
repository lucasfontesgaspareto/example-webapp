import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from '../../../i18n';
import yupFormSchemas from '../../../modules/shared/yup/yupFormSchemas';
import SecurityPermissionAutocompleteFormItem from '../../securityPermission/autocomplete/SecurityPermissionAutocompleteFormItem';
import * as yup from 'yup';
import securityPermissionEnumerators from '../../../modules/securityPermission/securityPermissionEnumerators';
import Accordion from '../../shared/Accordion';

const mapEntity = entity => { 
  return {
    id: entity,
    name: i18n(
      `entities.securityPermission.enumerators.entity.${entity}`,
    ),
    selected: false,
    actionList: securityPermissionEnumerators.action.map(action => ({
      entity,
      id: action,
      name: i18n(
        `entities.securityPermission.enumerators.action.${action}`,
      ),
      selected: false,
    })).filter(action => {
      switch (action.entity) {
        case 'tenant':
          return ['Edit', 'Destroy'].includes(action.id)
      
        case 'plan':
          return ['Read', 'Edit'].includes(action.id)
      
        case 'auditLog':
          return ['Read'].includes(action.id)
      
        case 'settings':
          return ['Edit'].includes(action.id)
      
        default:
          break;
      }

      return true
    })
  }
}

const schema = yup.object().shape({
  permissions: yupFormSchemas.relationToMany(
    i18n('entities.securityRole.fields.permissions'),
    {},
  ),
});

function SecurityRolePermissionsForm(props) {
  const { saveLoading } = props;

  const [entityList, setEntityList] = useState([...securityPermissionEnumerators.entity].map(mapEntity))

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      permissions: record.permissions || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    values.permissions = getPermissions(props.record)

    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });

    updateEntities(props.permissionsList)
  };

  const onChangeEntity = (entity) => {
    entity.selected = !entity.selected

    entity.actionList = entity.actionList.map(action => {
      action.selected = entity.selected

      return action
    })

    setEntityList(entityList.map(row => {
      if (row.id === entity.id) {
        return entity
      }

      return row
    }))
  }

  const onChangeAction = (action) => {
    let hasSelecteds = false

    setEntityList(entityList.map(entity => {
      if (entity.id === action.entity) {
        entity.actionList = entity.actionList.map(row => {
          if (row.id === action.id) {
            row.selected = !action.selected
          }

          if (row.selected) {
            hasSelecteds = true
          }

          return row
        })

        entity.selected = hasSelecteds
      }

      return entity
    }))
  }

  const getPermissions = (record) => {
    let permissions = record.permissions

    entityList.forEach(entity => {
      if (entity.selected) {
        entity.actionList.forEach(action => {
          if (action.selected) {
            const found = permissions.find(row => row.id === action.entityRecord.id)

            if (!found) {
              permissions = permissions.concat(action.entityRecord)
            }
          } else {
            permissions = permissions.filter(row => {
              if (row.id === action.entityRecord.id) {
                return false
              }

              return true
            })
          }
        })
      } else {
        entity.actionList.forEach(action => {
          permissions = permissions.filter(row => {
            if (row.id === action.entityRecord.id) {
              return false
            }

            return true
          })
        })
      }
    })

    return permissions.map(row => row.id)
  }

  const updateEntities = (permissionsList) => {
    setEntityList(entityList.map(entity => {
      entity.actionList.map(action => {
        const entityRecord = permissionsList.find(row => {
          return row.key === `${entity.id}${action.id}`
        })
        
        if (
          entityRecord
        ) {
          action.entityRecord = entityRecord
        }

        const roleEntityRecord = props.record.permissions.find(row => {
          return row.key === `${entity.id}${action.id}`
        })
        
        action.selected = Boolean(roleEntityRecord)
        entity.selected = Boolean(roleEntityRecord)

        return action
      })

      return entity
    }))
  }

  useEffect(() => {
    if (props.permissionsList) {
      updateEntities(props.permissionsList)
    }
  }, [props.record, props.permissionsList])

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4 hidden">
          <SecurityPermissionAutocompleteFormItem  
            name="permissions"
            label={i18n('entities.securityRole.fields.permissions')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>

        <div>
          {entityList.map((entity, index) => {
            return <div key={entity.id} className={``}>
              <Accordion
                first={index === 0}
                last={index === entityList.length - 1}
                header={
                  <label className="flex items-center" onClick={event => event.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      checked={Boolean(entity.selected)}
                      onChange={(event) => {
                        event.stopPropagation()
                        onChangeEntity(entity)
                      }}
                    />
                    <div className="ml-2">
                      {entity.name}
                    </div>
                  </label>
                }
              >
                <div className="flex ml-8 mt-2 space-x-8">
                  {entity.actionList.map(action => {
                    return <div key={action.id} className={``}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                          checked={Boolean(action.selected)}
                          onChange={() => onChangeAction(action)}
                        />
                        <div className="ml-2">
                          {action.name}
                        </div>
                      </label>
                    </div>
                  })}
                </div>
              </Accordion>
            </div>
          })}
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default SecurityRolePermissionsForm;
