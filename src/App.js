import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ToDoList from './pages/todo-list/todo-list.component';

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="main-container">
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/todolist'>
            <ToDoList/>
          </Route>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
