import React from 'react';
import './App.css';

function SelectCountry() {
  return (
    <select id='country' name='country'>
        <option value="monza">monza</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
  );
}

export default SelectCountry;