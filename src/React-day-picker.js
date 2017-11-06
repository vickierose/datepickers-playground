import React, { Component } from 'react';
import DatePicker from './react-day-picker-examples/SingleDatePicker';
import RangePicker from './react-day-picker-examples/RangePicker';

const DayPicker = () => {
  return (
    <div>
      <h1>react-daypicker</h1>
      <DatePicker />
      <RangePicker />
    </div>
  )
};

export default DayPicker;