import React, { ReactNode } from "react";

type Size = 'small' | 'medium' | 'large';

interface TableProps {
  stickyHeader: boolean;
  size: Size;
  children: ReactNode;
}

const Table = ({ stickyHeader, size, children }: TableProps) => {
  return(
    <table>
      {children}
    </table>
  )
}

export default Table;
