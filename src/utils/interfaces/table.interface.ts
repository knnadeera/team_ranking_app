export interface ITableColumn {
  header: string;
  key: string;
  style?: string;
}

export interface ITableData {
  columns: ITableColumn[];
  data: any[];
}
