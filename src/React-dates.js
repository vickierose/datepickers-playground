import React, { Component } from 'react';
import DatePicker from './react-dates-examples/SingleDatePicker';
import RangePicker from './react-dates-examples/RangePicker';

const CurrentDatepicker = () => {
  return (
    <div>
      <h1>Current Datepicker</h1>
      <DatePicker />
      <RangePicker />
    </div>
  )
};

export default CurrentDatepicker;