import React, {useState} from 'react';

import './App.css';
import AutoComplete from './components/Inputs/AutoComplete/AutoComplete';

const listOptions: ListCompany[] = [
  {id: '1', company: 'Netflix'},
  {id: '2',company: 'Google'},
  {id: '3',company: 'Amazon'},
  {id: '4',company: 'Sberbank'},
  {id: '5',company: 'OKO'},
  {id: '6',company: 'OZON'},
  {id: '7',company: 'Swift'},
  {id: '8',company: 'ASANA'},
  {id: '9',company: 'Goap'},
] 

const App = () => {
  const [valueInput, setValueInput] = useState(listOptions[0].company)

  const handleChange = (e: EventChange) => {
    console.log(e.target.value)
    setValueInput(e.target.value)
  }

  return (
    <div className="App">
      <AutoComplete 
        options={listOptions}
        value={valueInput}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
