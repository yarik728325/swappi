import React, {useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayListItem from "../../components/PlayListItem";
import { startRequestTracks } from "../../redux/reducer/albums";


const Deteils = ()=>{
  const { correctItem,loading } = useSelector(state=>state.albums);
  const {name, owner,images, tracks} = correctItem;
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(startRequestTracks(tracks.href)) 
  },[dispatch,tracks])
  console.log(correctItem)
  if(!correctItem || loading || !correctItem.track){
    return <h2>Loading ...</h2>
  }
  const {track} = correctItem;
  console.log(track);
  return <PlayListItem name={name} owner={owner} imeges={images}  track={track}/>
}

export default Deteils;