import React from 'react';
import './App.css';
import Login from './components/login'
import Registration from './components/registration'
import StartGame from './components/startGame'
import Game from './components/game'
import Result from './components/result'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render() {
    const { history } = this.props
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route history={history} exact path='/' component={Login}/>
          <Route history={history} path='/registration' component={Registration}/>
          <Route history={history} path='/startGame' component={StartGame}/>
          <Route history={history} path='/game' component={Game}/>
          <Route history={history} path='/result' component={Result}/>
          <Redirect to='/'/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
