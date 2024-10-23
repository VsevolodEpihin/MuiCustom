import React from 'react';

import style from '../../../styles/Buttons/GroupButton/GroupButton.module.css'

interface GroupButtonProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  'aria-label'?: string;
}

const ButtonGroup = ({ children, variant, 'aria-label': dataLabel }: GroupButtonProps) => {
  return(
    <div className={style[variant]}>
      {dataLabel && <h3>{dataLabel}</h3>}
      {children}
    </div>
  )
}

export default ButtonGroup;
