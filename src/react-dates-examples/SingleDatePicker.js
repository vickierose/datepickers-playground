import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './SingleDatePicker.scss';

function isBeforeDay (a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

  const aYear = a.year();
  const aMonth = a.month();

  const bYear = b.year();
  const bMonth = b.month();

  const isSameYear = aYear === bYear;
  const isSameMonth = aMonth === bMonth;

  if (isSameYear && isSameMonth) return a.date() < b.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
}

function isInclusivelyAfterDay (a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isBeforeDay(a, b);
}

class DatePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: moment().add(-1, 'days'),
      focused: false
    };
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.focusChangeHandler = this.focusChangeHandler.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
  }

  changeDateHandler (date) {
    this.setState({date})
  }

  focusChangeHandler ({focused}) {
    this.setState({focused})
  }

  isOutsideRange (day) {
    return isInclusivelyAfterDay(day, moment());
  }

  render () {
    return (
      <div className="picker-block">
        <h2>Single Date Picker</h2>
        <div className='datepicker'>
          <SingleDatePicker 
            date={this.state.date}
            onDateChange={this.changeDateHandler}
            focused={this.state.focused}
            onFocusChange={this.focusChangeHandler}
            isOutsideRange={this.isOutsideRange}
            numberOfMonths={1}
            hideKeyboardShortcutsPanel
            showDefaultInputIcon
            displayFormat="MM/DD/YYYY" />
        </div>
      </div>
    )
  }
};

export default DatePicker;
