import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from '../../../i18n';
import yupFormSchemas from '../../../modules/shared/yup/yupFormSchemas';
import InputFormItem from '../../shared/form/items/InputFormItem';
import SelectFormItem from '../../shared/form/items/SelectFormItem';
import securityPermissionEnumerators from '../../../modules/securityPermission/securityPermissionEnumerators';
import SecurityRoleAutocompleteFormItem from '../../securityRole/autocomplete/SecurityRoleAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  key: yupFormSchemas.string(
    i18n('entities.securityPermission.fields.key'),
    {
      "required": true
    },
  ),
  entity: yupFormSchemas.enumerator(
    i18n('entities.securityPermission.fields.entity'),
    {
      "required": true,
      "options": securityPermissionEnumerators.entity
    },
  ),
  action: yupFormSchemas.enumerator(
    i18n('entities.securityPermission.fields.action'),
    {
      "required": true,
      "options": securityPermissionEnumerators.action
    },
  ),
  allowedRoles: yupFormSchemas.relationToMany(
    i18n('entities.securityPermission.fields.allowedRoles'),
    {},
  ),
});

function SecurityPermissionForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      key: record.key,
      entity: record.entity,
      action: record.action,
      allowedRoles: record.allowedRoles || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <InputFormItem
            name="key"
            label={i18n('entities.securityPermission.fields.key')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="entity"
            label={i18n('entities.securityPermission.fields.entity')}
            options={securityPermissionEnumerators.entity.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.securityPermission.enumerators.entity.${value}`,
                ),
              }),
            )}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="action"
            label={i18n('entities.securityPermission.fields.action')}
            options={securityPermissionEnumerators.action.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.securityPermission.enumerators.action.${value}`,
                ),
              }),
            )}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SecurityRoleAutocompleteFormItem  
            name="allowedRoles"
            label={i18n('entities.securityPermission.fields.allowedRoles')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
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

export default SecurityPermissionForm;
