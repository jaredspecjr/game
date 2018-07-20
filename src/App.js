import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Room1 from './Room1';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="stage">
            <Switch>
              <Route exact path='/' component={Room1} />
            </Switch>
          </div>
          <div className="controls">
            <p>controls will go here</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
