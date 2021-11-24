import React from 'react';
import './style.scss'
import PlayListItem from '../PlayListItem';
import './style.scss';

const PlayListItems = ({playlists})=>{
  return(
    <div className="wrapper">
      {
        playlists.map((e,index)=>{
          const {name, owner,images} = e;
          return <PlayListItem name={name} owner={owner} imeges={images} index={index} checker={true} />
        })
      }
    </div>
  )
}

export default PlayListItems