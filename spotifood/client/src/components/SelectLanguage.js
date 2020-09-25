import React from 'react';
import './App.css';

function SelectLanguage() {
  return (
    <select id='locale' name='locale'>
        <option value="Portuguese">Portuguese</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
  );
}

export default SelectLanguage;