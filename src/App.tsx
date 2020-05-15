import React from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  
  const onClose = () => {
    console.log('I was closed.')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Alert title='default' />
        <Alert title='success' type='success' />
        <Alert title='标题' type="danger" detailstion="detailstion" onClose={onClose} closable={true} />
        <Button disabled> disabled Button </Button>
        <Button onClick = {() => {console.log(123)}} btnType ="primary"> Primary </Button>
        <Button btnType ="link" href="https://www.baidu.com" target="_blank"> Link </Button>
        <Button btnType ="link" href="https://www.baidu.com" disabled> Link </Button>
        <Button btnType ="default" size ='sm'> Small </Button>
        <Button btnType ="danger"> Danger </Button>
        <Button className = 'uobtn' btnType ="default" size ='lg'> Large </Button>
        <Menu defaultIndex={0}>
          <MenuItem index={0}>
            first menu
          </MenuItem>
          <MenuItem index={1}>
            two menu
          </MenuItem>
          <MenuItem index={2}>
            three menu
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
