import React from 'react';
import './App.css';

function PlaylistSearchBar(props) {
  return (
        <input type='text' 
          placeholder='Search for playlists' 
          value={props.search.value} 
          onChange={e=>props.setSearch(atual=>({ ...atual, value: e.target.value}))} 
        />
  );
}

export default PlaylistSearchBar;