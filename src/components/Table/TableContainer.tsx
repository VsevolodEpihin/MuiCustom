import React, { ElementType, ReactNode } from 'react';

interface TableContainerProps {
  component?: ElementType;
  children: ReactNode;
  [key: string]: any;
}

const TableContainer = ({ component: Component = 'div', children, ...props }: TableContainerProps) => {
  return(
    <Component {...props}>
      {children}
    </Component>
  )
}

export default TableContainer;
