import React, { useState, useEffect } from 'react';
import './App.css';
import Playlists from './Playlists';
import PlaylistFilter from './PlaylistFilter';
import axios from 'axios';

function App() {
    const [filters, setFilters] = useState()
    const [playlists, setPlaylists] = useState()

    useEffect( ()=> {

      axios.get(`/api/filters`)
      .then(res => setFilters(res.data.filters))
      .catch(err => console.log(err));

      axios.get(`/api/playlists`)
      .then(res => setPlaylists(res.data.filters))
      .catch(err => console.log(err));
      
    }, [])
    console.log(filters)
    console.log(playlists)


  return (
    <div className="App">
    {
      filters && playlists && 
      (<>
          <PlaylistFilter filters={filters} />
          <Playlists playlists={playlists} />
      </>)
    }
    </div>
  );
}

export default App;
