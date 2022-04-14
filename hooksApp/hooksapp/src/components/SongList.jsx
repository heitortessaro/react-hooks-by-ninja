import React, { useEffect, useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'musica1', id:0},
    { title: 'musica2', id:1},
    { title: 'musica3', id:2},
  ]);
  const [age,setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, {title, id: songs.length} ])
  }
  useEffect(() => {console.log("Use effect Hook songs")}, [songs]);
  useEffect(() => {console.log("Use effect Hook age")}, [age]);
  return ( 
    <div className='song-list'>
      <ul>
        {songs.map((song) => <li key={song.id}>{song.title}</li>)}
      </ul>
      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm addSong={addSong}/>
      <button type='button' onClick={() => setAge(age + 1)}>
        Add 1 to age {age} </button>
    </div>
  );
}

export default SongList;