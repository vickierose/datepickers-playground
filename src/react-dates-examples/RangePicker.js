import React, {Component} from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './RangePicker.scss';

class RangePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment().add(-7, 'days'),
      endDate: moment(),
      focusedInput: null
    }

    this.datesChangeHandler = this.datesChangeHandler.bind(this);
    this.focusChangeHandler = this.focusChangeHandler.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
  }

  datesChangeHandler ({startDate, endDate}) {
    this.setState({startDate, endDate})
  }

  focusChangeHandler (focusedInput) {
    this.setState({focusedInput})
  }

  isOutsideRange () {
    return false;
  }

  render () {
    return (
      <div className="picker-block">
        <h2>Range Selector</h2>
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
    )
  }
};

export default RangePicker;
