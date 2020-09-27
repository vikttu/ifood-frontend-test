import React from 'react';
import LanguageOption from './LanguageOption'
import './App.css';

function SelectLanguage(props) {
  
  const languagesOptions = props.languages.values.map(language => <LanguageOption 
    key={language.name} 
    name={language.name} 
    value={language.value} />)

  return (
    <select id='locale' name='locale'>
      {languagesOptions}
    </select>
  );
}

export default SelectLanguage;