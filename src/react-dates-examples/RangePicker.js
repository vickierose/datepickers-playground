import React, {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './RangePicker-v15.scss';

class RangePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment().add(-7, 'days'),
      endDate: moment(),
      focusedInput: null
    }

    this.preventClose = false;

    this.datesChangeHandler = this.datesChangeHandler.bind(this);
    this.focusChangeHandler = this.focusChangeHandler.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  datesChangeHandler ({startDate, endDate}) {
    this.setState({startDate, endDate})
  }

  focusChangeHandler (focusedInput) {
    const prevFocusedInput = this.state.focusedInput;
    
    if (prevFocusedInput !== focusedInput) {
      this.preventClose = true;
    };
    this.setState({focusedInput})
  }

  onClick () {
    if (this.preventClose) {
      this.preventClose = false;
    } else {
      this.focusChangeHandler(null);
    }
  }

  isOutsideRange () {
    return false;
  }

  render () {
    return (
      <div className="picker-block">
        <h2>Range Selector</h2>
        <div className="rangepicker" onClick={this.onClick}>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            focusedInput={this.state.focusedInput}
            onDatesChange={this.datesChangeHandler}
            onFocusChange={this.focusChangeHandler}
            isOutsideRange={this.isOutsideRange}
            showDefaultInputIcon
            hideKeyboardShortcutsPanel />
          </div>
      </div>
    )
  }
};

export default RangePicker;
