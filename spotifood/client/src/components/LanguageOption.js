import React from 'react';
import './App.css';

function LanguageOption(props) {
  return (
      <option value={props.value}>{props.name}</option>
  );
}

export default LanguageOption;