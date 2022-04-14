import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'musica1', id:0},
    { title: 'musica2', id:1},
    { title: 'musica3', id:2},
  ]);
  const addSong = (title) => {
    setSongs([...songs, {title, id: songs.length} ])
  }
  return ( 
    <div className='song-list'>
      <ul>
        {songs.map((song) => <li key={song.id}>{song.title}</li>)}
      </ul>
      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm addSong={addSong}/>
    </div>
  );
}

export default SongList;