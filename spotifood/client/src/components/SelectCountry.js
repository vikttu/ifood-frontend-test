import React from 'react';
import CountryOption from './CountryOption';
import './App.css';

function SelectCountry(props) {

  const countriesOptions = props.countries.values.map(country => <CountryOption 
    key={country.name} 
    name={country.name} 
    value={country.value} />)
    
  return (
    <select id='country' name='country'>
        {countriesOptions}
    </select>
  );
}

export default SelectCountry;