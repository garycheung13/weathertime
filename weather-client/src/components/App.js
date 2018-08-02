import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import DetailPage from './detail/DetailPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/detail/:id' component={DetailPage} />
      </div>
    );
  }
}

export default App;
