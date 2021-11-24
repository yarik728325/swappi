import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCorrectItem } from "../../redux/reducer/albums";

const PlayListItem = ({name, owner, imeges,index,checker,track})=>{
  const dispatch = useDispatch();
  const changItem= (index)=>{
   dispatch(changeCorrectItem(index))
  }
  const Item = checker?(
    <div className="item">
      <img src={imeges[0].url} alt="" />
      <div className="desrcp">
        <h2>Title: {name}</h2>
        <div className="ower">Author: {owner.display_name}</div>
        <Link to="/deteil"  onClick={()=>changItem(index)}>Deteil</Link>
      </div>
    </div>
  ):(
    <div className="item">
    <img src={imeges[0].url} alt="" />
    <div className="desrcp">
      <h2>Title: {name}</h2>
      <div className="ower">Author: {owner.display_name}</div>
      <div className="track">
        {
          track.map(e=>{
            const { track ,added_at} =e
            return <>
            <h2>nameTrack: {track.name}</h2>
              <div className="ower">Added: {added_at}</div>
            </>
          })
        }
      </div>
    </div>
  </div>
  )
  return Item
}

export default PlayListItem