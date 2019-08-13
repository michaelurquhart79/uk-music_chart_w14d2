import React from 'react';
import './Song.css';

const Song = (props) => {
  return(
    <div>

      <li>
        <p>{props.position}. {props.song.title.label}</p>
        <img className="image" src={props.song["im:image"][1].label}
        alt={props.song.title.label + " thumbnail"}/>
      </li>
    </div>
  );
}

export default Song;

// chart position, title and artist
