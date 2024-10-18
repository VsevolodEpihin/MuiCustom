import React from 'react';

import style from '../../../styles/Inputs/AutoComplete/ListDraw.module.css';

interface ListDrawProps {
  listCompany: ListCompany[]
}

const ListDraw = ( { listCompany } : ListDrawProps) => {

  const handleClick = (company: string) => {
    
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
