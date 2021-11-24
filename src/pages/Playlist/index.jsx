import React,{ useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRequest } from "../../redux/reducer/albums";
import PlayListItems from "../../components/PlayListItems";

const PlayList = ()=>{
  const { PlayList } = useSelector(state=>state.albums);

  console.log(PlayList)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(startRequest());
  },[dispatch])
  if(!PlayList){
    return <h2>Loading...</h2>
  }
  return (
    <div className="PlayList">
      {
        <PlayListItems playlists={PlayList} />
      }
    </div>
  )
}

export default PlayList;