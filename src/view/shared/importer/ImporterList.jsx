import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from '../../../i18n';
import ImporterRowStatus from './ImporterRowStatus';
import Pagination from '../table/Pagination';
import TableColumnHeader from '../table/TableColumnHeader';

export default (selectors, actions, fields) => {
  function ImporterList() {
    const dispatch = useDispatch();
    const rows = useSelector(selectors.selectRows);
    const currentPageRows = useSelector(
      selectors.selectCurrentPageRows,
    );
    const pendingRowsCount = useSelector(
      selectors.selectPendingRowsCount,
    );
    const errorRowsCount = useSelector(
      selectors.selectErrorRowsCount,
    );
    const importedRowsCount = useSelector(
      selectors.selectImportedRowsCount,
    );
    const sorter = useSelector(selectors.selectSorter);
    const pagination = useSelector(
      selectors.selectPagination,
    );

    const showTotal = (total, range) => {
      return i18n(
        'importer.total',
        importedRowsCount,
        pendingRowsCount,
        errorRowsCount,
      );
    };

    const doChangeSort = (field) => {
      const order =
        sorter.field === field && sorter.order === 'ascend'
          ? 'descend'
          : 'ascend';

      dispatch(
        actions.doChangeSort(rows, {
          field,
          order,
        }),
      );
    };

    const doChangePagination = (pagination) => {
      dispatch(actions.doChangePagination(pagination));
    };

    return (
      <>
        <div className="table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border">
          <table className="border-collapse min-w-full leading-normal">
            <thead>
              <tr>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={true}
                  sorter={sorter}
                  name="_line"
                  label={i18n('importer.line')}
                />
                {fields.map((schemaItem) => (
                  <TableColumnHeader
                    key={schemaItem.name}
                    onSort={doChangeSort}
                    hasRows={true}
                    sorter={sorter}
                    name={schemaItem.name}
                    label={schemaItem.label}
                  />
                ))}
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={true}
                  sorter={sorter}
                  name="_status"
                  label={i18n('importer.status')}
                />
              </tr>
            </thead>
            <tbody>
              {currentPageRows.map((row) => (
                <tr key={row._line}>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row._line}
                  </td>
                  {fields.map((schemaItem) => (
                    <td
                      className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
                      key={schemaItem.name}
                    >
                      <pre
                        style={{ fontFamily: 'inherit' }}
                      >{schemaItem.render
                            ? schemaItem.render(
                                row[schemaItem.name],
                              )
                            : row[schemaItem.name] != null
                            ? String(row[schemaItem.name])
                            : null}</pre>
                    </td>
                  ))}
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <ImporterRowStatus
                      value={row._status}
                      errorMessage={row._errorMessage}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          onChange={doChangePagination}
          pagination={pagination}
          showTotal={showTotal}
        />
      </>
    );
  }

  return ImporterList;
};
