import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  changeSearch } from "../../redux/reducer/albums";
import { TextField } from '@material-ui/core';

const SearchPannel = ()=>{
  const dispatch = useDispatch();
  const { search } = useSelector(state=>state.albums);
  return(
    <TextField id="standard-basic" value={search} label="Standard" variant="standard" onChange={(e)=>{
      dispatch(changeSearch(e.target.value))
    }} />
  )
}

export default SearchPannel;