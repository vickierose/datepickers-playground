import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.scss';

import Navigation from './Navigation';
import CurrentDatepicker from './React-dates';
import DayPicker from './React-day-picker';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          {/* <Navigation /> */}
          <div className="main">
            <Route exact path="/" component={CurrentDatepicker} />
            {/* <Route path="/react-day-picker" component={DayPicker} />*/}
          </div>
        </div>
      </Router>
    );
  }
};
