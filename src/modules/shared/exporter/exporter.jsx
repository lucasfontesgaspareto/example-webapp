import { Excel } from '../excel/excel';
import mapKeys from 'lodash/mapKeys';
import ExporterSchema from './exporterSchema'

export default class Exporter {
  schema;
  excelFileName;

  constructor(fields, excelFileName) {
    this.schema = new ExporterSchema(fields);
    this.excelFileName = excelFileName;
  }

  transformAndExportAsExcelFile(rows) {
    const exportableData = rows.map((row) => {
      const rowCasted = this.schema.cast(row);
      return this._makeNameHeadersIntoLabels(rowCasted);
    });

    return Excel.exportAsExcelFile(
      exportableData,
      this.schema.labels,
      this.excelFileName + '_' + new Date().getTime(),
    );
  }

  _makeNameHeadersIntoLabels(row) {
    return mapKeys(row, (value, key) => {
      return this.schema.labelOf(key);
    });
  }
}
