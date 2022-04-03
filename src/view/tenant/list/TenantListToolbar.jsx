import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { i18n } from '../../../i18n';
import TabsLink from '../../layout/TabsLink';

function TenantToolbar(props) {
  return (
    <div className="mb-4">
      <TabsLink to="/tenant/new">
        <button
          className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          type="button"
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          {i18n('common.new')}
        </button>
      </TabsLink>
    </div>
  );
}

export default TenantToolbar;
