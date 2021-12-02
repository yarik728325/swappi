import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chaneOneItem } from "../../redux/reducer/albums";
import './style.scss';


const Item = ({name,index,url,other})=>{
  const dispatch = useDispatch();
  const allData = { name,...other };
  const changeCurr = ()=>{
    dispatch(chaneOneItem(allData));
  }
  url = url.split('people')[1];
  if(index === 0){
    return(
     <Link 
     to={`/character${url}`} 
     className="styled  first" 
     onClick={
       ()=>{
        changeCurr();
       }
     }
     key={(Math.random() + 1).toString(36).substring(7)}
     >
       <div className="hover">Deteil</div>
       <div className="styled__name">{name}</div>
       <img src="https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill" alt="" />
     </Link>
    ) 
  }
  return (
    <Link 
    to={`/character${url}`} 
    className="styled other" 
    onClick={
      ()=>{
        changeCurr();
      }
    }
    >
       <div className="hover">Deteil</div>
       <div className="styled__name">{name}</div>
       <img src="https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill" alt="" />
    </Link>
  )
}

export default Item