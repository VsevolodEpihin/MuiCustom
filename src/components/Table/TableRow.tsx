import React, { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  isHeader?: boolean;
}

const TableRow = ({ children, isHeader = false }: TableRowProps) => {
  return(
    <tr style={{ backgroundColor: isHeader ? '#f0f0f0' : '#fff' }}>
      {children}
    </tr>
  )
}

export default TableRow;
