import React from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'

function App() {
  
  const onClose = () => {
    console.log('I was closed.')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button disabled> disabled Button </Button>
        <Button onClick = {() => {console.log(123)}} btnType ="primary"> Primary </Button>
        <Button btnType ="link" href="https://www.baidu.com" target="_blank"> Link </Button>
        <Button btnType ="link" href="https://www.baidu.com" disabled> Link </Button>
        <Button btnType ="default" size ='sm'> Small </Button>
        <Button btnType ="danger"> Danger </Button>
        <Button className = 'uobtn' btnType ="default" size ='lg'> Large </Button>
        <Alert title='标题' type="danger" detailstion="detailstion" onClose={onClose} closable={true} />
      </header>
    </div>
  );
}

export default App;
