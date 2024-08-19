import React from "react";
import { ITableData } from "../../utils/interfaces/table.interface";
import {
  EStringFormatting,
  stringFormatting,
} from "../../functions/stringFormattingFunction";
import "./table.scss";

interface IProp {
  title?: string;
  subTitle?: string;
  tableData: ITableData;
}

const Table = ({ title, subTitle, tableData }: IProp) => {
  return (
    <div className="w-100 table-container">
      <div className="d-flex justify-content-between">
        <div className="fw-bold">{title}</div>
        <div className="fw-normal text-dark">{subTitle}</div>
      </div>
      <table className="w-100 table table-responsive">
        <thead className="w-100 table-dark">
          <tr className="w-100">
            {tableData?.columns?.map((column, index) => (
              <th
                key={index}
                className={`py-1 fw-medium ${column.style ?? ""}`}
              >
                {stringFormatting(column.header, EStringFormatting.FIRST)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableData?.columns?.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-0 table-item ${row[column.key].style ?? ""} ${
                    column.style ?? ""
                  }`}
                >
                  {row[column.key].val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
