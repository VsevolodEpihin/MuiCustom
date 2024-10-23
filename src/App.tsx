import React, {useState} from 'react';

import './App.css';
import AutoComplete from './components/Inputs/AutoComplete/AutoComplete';
import Button from './components/Buttons/Button/Button';
import GroupButton from './components/Buttons/GroupButton/GroupButton';
import TableContainer from './components/Table/TableContainer';
import Table from './components/Table/Table';
import TableHead from './components/Table/TableHead';
import TableRow from './components/Table/TableRow';
import TableCell from './components/Table/TableCell';
import TableBody from './components/Table/TableBody';

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
  const [valueInput, setValueInput] = useState<string>(listOptions[0].company)

  const handleChange = (e: EventChange) => {
    setValueInput(e.target.value)
  }

  const handleClick = () => {
    console.log(1)
  }

  return (
    <div className="App">
      <h2>AutoComplete</h2>
      <AutoComplete 
        options={listOptions}
        value={valueInput}
        onChange={handleChange}
        setValueInput={setValueInput}
      />
      <div className='container btn-container'>
          <h2>Buttons</h2>
        <Button
        href='http://google.com'
        variant='text'
          >
          Text
        </Button>
        <Button
        variant='disabled'
        href='http://google.com'
        onClick = {handleClick}
        >
          Disabled
        </Button>
        <Button
        variant='outlined'
        href='http://google.com'
        onClick={handleClick}
        >
          Outlined
        </Button>
      </div>
      <h2>GroupButtons</h2>
      <GroupButton variant='text' aria-label='Aria-label: buttons'>
        <Button>btn1</Button>
        <Button>btn2</Button>
        <Button>btn3</Button>
      </GroupButton>
      <h2>Table</h2>
      <TableContainer component={'div'}>
        <Table stickyHeader size='small'>
          <TableHead>
            <TableRow isHeader>
              <TableCell isHeader>Tittle 1</TableCell>
              <TableCell isHeader>Tittle 2</TableCell>
              <TableCell isHeader>Tittle 3</TableCell>
              <TableCell isHeader>Tittle 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Данные 1</TableCell>
              <TableCell>Данные 2</TableCell>
              <TableCell>Данные 3</TableCell>
              <TableCell>Данные 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Данные 5</TableCell>
              <TableCell>Данные 6</TableCell>
              <TableCell>Данные 7</TableCell>
              <TableCell>Данные 8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Данные 5</TableCell>
              <TableCell>Данные 6</TableCell>
              <TableCell>Данные 7</TableCell>
              <TableCell>Данные 8</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
