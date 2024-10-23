import React, { ReactElement } from "react";

interface TableHeadProps {
  children: ReactElement;
}

const TableHead = ({children}: TableHeadProps) => {
  return(
    <thead>
      {children}
    </thead>
  )
}

export default TableHead;
