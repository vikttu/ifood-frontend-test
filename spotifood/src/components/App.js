import React from 'react';
import './App.css';
import Playlists from './Playlists';
import PlaylistFilter from './PlaylistFilter';

function App() {
  return (
    <div className="App">
      <Playlists />
      <PlaylistFilter />
    </div>
  );
}

export default App;
