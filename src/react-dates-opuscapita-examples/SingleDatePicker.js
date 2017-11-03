import React, {Component} from 'react';
import moment from 'moment';

class DatePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: moment()
    }
  }

  render () {
    return (
      <div>
        <h2>Single Date Picker</h2>
      </div>
    )
  }
};

export default DatePicker;
