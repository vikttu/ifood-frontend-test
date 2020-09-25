import React from 'react';
import './App.css';
import Playlists from './Playlists';
import PlaylistFilter from './PlaylistFilter';
import axios from 'axios';
/*
axios.get('https://www.mocky.io/v2/5a25fade2e0000213aa90776')
.then(res=>{
  console.log(res.data.filters);
  return res.data.filters
})
.catch(err=>console.log(err));
*/

function App() {
//    const [filters, setFilters]


  return (
    <div className="App">
      <PlaylistFilter />
      <Playlists />
    </div>
  );
}

export default App;
