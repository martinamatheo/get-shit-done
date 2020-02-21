import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ToDoList from './pages/todo-list/todo-list.component';

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
        <div className="main-container">
          <Route exact path='/' component={Homepage} />
          <Route path='/todolist' component={ToDoList} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
