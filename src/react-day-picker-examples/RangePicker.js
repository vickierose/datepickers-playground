import React, {Component} from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class RangePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };

    this.dateChangeHandler = this.dateChangeHandler.bind(this);
  }

  dateChangeHandler () {
    
  }

  render () {
    const dayPickerProps = {
      numberOfMonth: 2
    };

    return (
      <div className='picker-block'>
        <h2>Range Selector</h2>
        <DayPickerInput 
        placeholder=""
        dayPickerProps={dayPickerProps} />
      </div>
    )
  }
};

export default RangePicker;