import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startRequest } from "../../redux/reducer/albums";
import Spinner from "../../components/Spinner";
import OwnPagination from "../../components/Pagination";
import Items from "../../components/Items";
import SearchPannel from "../../components/SearchPannel";
import './style.scss'

const Home = ()=>{
  const dispatch = useDispatch();
  const { data,loading,currentPage,search } = useSelector(state=>state.albums);
  useEffect(()=>{
    dispatch(startRequest(
      {
        page:currentPage,
        search,
      }
    ))
  },[dispatch,currentPage,search])

  if(loading || !data){
    return (
      <div className="container">
        <SearchPannel/>
        <Spinner/>
      </div>
    )
  }

  return (
    <>
      <div className="container">
        <SearchPannel/>
        <Items data={data}/>
        <OwnPagination/>
      </div>
    </>
  )
}

export default Home;