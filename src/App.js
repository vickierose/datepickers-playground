import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.scss';

import Navigation from './Navigation';
import CurrentDatepicker from './React-dates';
import DayPicker from './React-day-picker';
import ReactDatesDatepicker from './React-dates-opuscapita';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div>
            <Route exact path="/" component={CurrentDatepicker} />
            <Route path="/react-day-picker" component={DayPicker} />
            <Route path="/@opuscapita-react-dates" component={ReactDatesDatepicker} />
          </div>
        </div>
      </Router>
    );
  }
};
