import React, { useState, useEffect } from 'react';
import './App.css';
import Playlists from './Playlists';
import PlaylistFilter from './PlaylistFilter';
import axios from 'axios';



function App() {
    const [filters, setFilters] = useState(()=>[])
    const [playlists, setPlaylists] = useState(()=>[])

    useEffect( ()=> {
      axios.get(`/api/filters`)
      .then(res => setFilters(prevFilters => res.data))
      .catch(err => console.log(err))
    }, [])
    console.log(filters)

    useEffect( ()=> {
      axios.get(`/api/playlists`)
      .then(res => setPlaylists(prevPlaylists => res.data))
      .catch(err => console.log(err))
    }, [])
    console.log(playlists)


  return (
    <div className="App">
      <PlaylistFilter filters={filters} />
      <Playlists playlists={playlists} />
    </div>
  );
}

export default App;
