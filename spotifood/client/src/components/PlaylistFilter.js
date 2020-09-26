import React, { useState, useEffect } from 'react';
import SelectCountry from './SelectCountry'
import SelectLanguage from './SelectLanguage'
import './PlaylistFilter.css';

function PlaylistFilter(props) {
  return (
    <div className="playlist-filter">
        <form>
        <input type='text' />
        <SelectLanguage />
        <SelectCountry />
        <input type='text' placeholder='Search for playlists' onChange={} />
        </form>
    </div>
  );
}

export default PlaylistFilter;
