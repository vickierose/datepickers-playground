import React, {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class RangePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment().add(-7),
      endDate: moment(),
      focusedInput: null
    }

    this.datesChangeHandler = this.datesChangeHandler.bind(this);
    this.focusChangeHandler = this.focusChangeHandler.bind(this);
  }

  datesChangeHandler ({startDate, endDate}) {
    this.setState({startDate, endDate})
  }

  focusChangeHandler (focusedInput) {
    this.setState({focusedInput})
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
          onFocusChange={this.focusChangeHandler} />
      </div>
    )
  }
};

export default RangePicker;
