import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
    <li><Link to="/">Current Datepicker</Link></li>
    <li><Link to="/react-day-picker">react-day-picker</Link></li>
    <li><Link to="/@opuscapita-react-dates">@opuscapita/react-dates</Link></li>
</ul>    
  )
};

export default Navigation
