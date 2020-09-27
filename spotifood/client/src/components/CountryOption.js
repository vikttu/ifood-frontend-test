import React from 'react';
import './App.css';

function CountryOption(props) {
  return (
      <option value={props.value}>{props.name}</option>
  );
}

export default CountryOption;