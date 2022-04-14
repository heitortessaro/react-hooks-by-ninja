import React, { useState } from 'react';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'musica1', id:0},
    { title: 'musica2', id:1},
    { title: 'musica3', id:2},
  ]);
  const addSong = () => {
    setSongs([...songs, {title:'new song', id: songs.length} ])
  }
  return ( 
    <div className='song-list'>
      <ul>
        {songs.map((song) => <li key={song.id}>{song.title}</li>)}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}

export default SongList;