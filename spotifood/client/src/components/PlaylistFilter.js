import React, { useState } from 'react';
import SelectCountry from './SelectCountry'
import SelectLanguage from './SelectLanguage'
import PlaylistSearchBar from './PlaylistSearchBar'
import './PlaylistFilter.css';

function PlaylistFilter(props) {

  const [search, setSearch] = useState({value: ''})
  return (
    <div className="playlist-filter">
        <form>
        <PlaylistSearchBar search={search} setSearch={()=>setSearch()} />
        <SelectLanguage languages={props.filters[0]} />
        <SelectCountry countries={props.filters[1]} />
        </form>
    </div>
  );
}

export default PlaylistFilter;
