import React, {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class DatePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false
    };
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.focusChangeHandler = this.focusChangeHandler.bind(this);
  }

  changeDateHandler (date) {
    this.setState({date})
  }

  focusChangeHandler ({focused}) {
    this.setState({focused})
  }

  render () {
    return (
      <div>
        <h2>Single Date Picker</h2>
        <SingleDatePicker 
          date={this.state.date}
          onDateChange={this.changeDateHandler}
          focused={this.state.focused}
          onFocusChange={this.focusChangeHandler}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          showDefaultInputIcon
          displayFormat="MM/DD/YYYY" />
      </div>
    )
  }
};

export default DatePicker;
