import React from 'react';
import SelectCountry from './SelectCountry'
import SelectLanguage from './SelectLanguage'
import './PlaylistFilter.css';

function PlaylistFilter() {
  return (
    <div className="playlist-filter">
        <form>
        <input type=''></input>
        <SelectLanguage />
        <SelectCountry />
        <input type='text' placeholder='Search for playlists'></input>
        </form>
    </div>
  );
}

export default PlaylistFilter;
