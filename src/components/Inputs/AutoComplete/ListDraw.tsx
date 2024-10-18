import React, { useState } from 'react';

import style from '../../../styles/Inputs/AutoComplete/ListDraw.module.css';

interface ListDrawProps {
  listCompany: ListCompany[],
  setValueInput: (company: string) => void;
  setHiddenList: (hide: boolean) => void;
}

const ListDraw = ( { listCompany, setValueInput, setHiddenList } : ListDrawProps) => {

  const handleClick = (company: string) => {
    setValueInput(company)
    setHiddenList(true)
  }

  return(
    <ul className={style.container}>
      {listCompany.map((elem) => {
        return (
          <li
            onClick={() => handleClick(elem.company)}
            className={style.item}
            key={elem.id}>
            {elem.company}
          </li>)
      })}
    </ul>
  )
}

export default ListDraw;
