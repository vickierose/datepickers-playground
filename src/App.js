import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.scss';

import CurrentDatepicker from './React-dates';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="main">
            <Route exact path="/" component={CurrentDatepicker} />
          </div>
        </div>
      </Router>
    );
  }
};
