import React, {useEffect}  from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addSome } from "../../redux/reducer/albums";

const Items = ()=>{
  const dispatch = useDispatch();
  const {tmp} = useSelector(state=>state.albums);
 return (
   <>
    <button onClick={()=>{
      dispatch(addSome());
    }} >Add</button>
    <h2>{tmp}</h2>
   </>
 )
}

export default Items;