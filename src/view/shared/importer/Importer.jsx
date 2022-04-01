import React from 'react';
import { useSelector } from 'react-redux';
import importerFormHoc from './ImporterForm';
import importerListHoc from './ImporterList';
import importerStatusHoc from './ImporterStatus';
import importerToolbarHoc from './ImporterToolbar';

export default (
  selectors,
  actions,
  fields,
  templateHelp,
) => {
  const ImporterToolbar = importerToolbarHoc(
    selectors,
    actions,
    fields,
    templateHelp,
  );
  const ImporterStatus = importerStatusHoc(selectors);
  const ImporterList = importerListHoc(
    selectors,
    actions,
    fields,
  );
  const ImporterForm = importerFormHoc(selectors, actions);

  function Importer() {
    const hasRows = useSelector(selectors.selectHasRows);

    return (
      <>
        <ImporterToolbar />
        <ImporterStatus />
        <div className="mt-2">
          {hasRows ? <ImporterList /> : <ImporterForm />}
        </div>
      </>
    );
  }

  return Importer;
};
