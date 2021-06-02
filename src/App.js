import React from 'react';
import './App.css';
import Login from './components/login'
import Registration from './components/registration'
import StartGame from './components/startGame'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Login/>
        <Registration/> */}
        <StartGame/>
      </div>
    );
  }
}

export default App;
