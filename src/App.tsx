import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled> disabled Button </Button>
        <Button onClick = {() => {console.log(123)}} btnType = {ButtonType.Primary}> Primary </Button>
        <Button btnType = {ButtonType.Link} href="https://www.baidu.com" target="_blank"> Link </Button>
        <Button btnType = {ButtonType.Link} href="https://www.baidu.com" disabled> Link </Button>
        <Button btnType = {ButtonType.Default} size = {ButtonSize.Small}> Small </Button>
        <Button btnType = {ButtonType.Danger}> Danger </Button>
        <Button className = 'uobtn' btnType = {ButtonType.Default} size = {ButtonSize.Large}> Large </Button>
        <Alert title='title' type='warning'> success </Alert>
      </header>
    </div>
  );
}

export default App;
