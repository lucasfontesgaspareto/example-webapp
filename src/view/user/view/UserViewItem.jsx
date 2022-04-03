import selectors from '../../../modules/user/userSelectors';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import TabsLink from '../../layout/TabsLink';

function UserViewItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const label = (record) => {
    if (!record) {
      return null;
    }

    if (!record.fullName) {
      return record.email;
    }

    return `${record.fullName} <${record.email}>`;
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <TabsLink
            className="text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400"
            to="/user/:id"
            options={{
              id: record.id
            }}
          >
            {label(record)}
          </TabsLink>
        </div>
      );
    }

    return <div key={record.id}>{label(record)}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <div className="mb-4">
      <label className="text-medium text-gray-600 dark:text-gray-400">
        {props.label}
      </label>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </div>
  );
}

UserViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default UserViewItem;
