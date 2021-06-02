import React from 'react';
import './App.css';
import Login from './components/login'
import Registration from './components/registration'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login/>
          <Registration/>
        </header>
      </div>
    );
  }
}

export default App;
