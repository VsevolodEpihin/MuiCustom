import React, { ReactNode } from "react";

interface TableCellProps {
  isHeader?: boolean;
  children: ReactNode;
}

const TableCell = ({isHeader = false, children}: TableCellProps) => {
    return (
      isHeader ? (
        <th style={{ padding: '16px', border: '1px solid #ccc' }}>
          {children}
        </th>
      ) : (
        <td style={{ padding: '16px', border: '1px solid #ccc' }}>
          {children}
        </td>
      )
    );
}

export default TableCell;
