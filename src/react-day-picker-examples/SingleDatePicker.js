import React, {Component} from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

const currentYear = moment().year();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => <option key={i} value={i}>{month}</option>)}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year, i) =>
          <option key={i} value={year}>
            {year}
          </option>
        )}
      </select>
    </form>
  );
}

class DatePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: moment().add(-1, 'days').toDate(),
      month: moment().add(-1, 'days').toDate()
    };

    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
  }

  handleYearMonthChange (month) {
    this.setState({ month });
  }

  render () {
    const dayPickerProps = {
      value: this.state.date,
      selectedDay: this.state.date,
      month: this.state.month,
      fromMonth: fromMonth,
      toMonth: toMonth,
      disabledDays: {after: moment().add(-1, 'days').toDate()},
      captionElement: <YearMonthForm onChange={this.handleYearMonthChange} />
    }

    return (
      <div className='picker-block'>
        <h2>Single Date Picker</h2>
        <DayPickerInput 
          placeholder="MM/DD/YYYY"
          dayPickerProps={dayPickerProps} />
      </div>
    )
  }
};

export default DatePicker;
