import React, { useState } from 'react';

import style from '../../../styles/Inputs/AutoComplete/Input.module.css'
import ListDraw from './ListDraw';

interface AutoCpmpleteProps {
  options: ListCompany[];
  value: string | number;
  onChange: (e: EventChange)=>void;
}

const AutoComplete = ({options, value, onChange}: AutoCpmpleteProps) => {

  const [selectedOptions, setSelectedOptions] = useState<ListCompany[]>([])

  const selectOptions = (e: EventChange) => {
    const filterOptions = options.filter((elem) => {
      console.log(e.target.value)
      console.log(elem)
      return elem.company.toLowerCase().startsWith(e.target.value.toLowerCase())
    })
    
    onChange(e)
    setSelectedOptions(filterOptions);
    console.log(filterOptions);
  }

  return(
    <div className={style.boxContainer}>
      <div className={style.container}>
        <input
        className={style.input}
        value={value}
        type="text"
        onChange={selectOptions} />
        <img className={style.img} src="arrow.png" alt="arrow" />
      </div>
      <div>
        {selectedOptions.length > 0 && <ListDraw listCompany={selectedOptions} />}
      </div>
    </div>
  )
}

export default AutoComplete;