import React from 'react';

import style from '../../../styles/Buttons/Button/Button.module.css'

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  href?:  string;
  onClick?: () => void;
  children?: React.ReactNode;
}


const Button = ({variant, disabled, href, onClick, children}: ButtonProps) => {
  return(
    <button
    onClick={onClick}
    className={`btn ${variant && style[variant]}`}
    disabled={disabled}
    >
      {
      href &&
      <a className={style.link} href={href}>
        {children}
      </a>
      }
      {!href && children}
    </button>
  )
}

export default Button;