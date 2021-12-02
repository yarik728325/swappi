import React from "react";
import './style.scss';
import Item from "../Item";

const Items = ({data}) => {
  return(
    <div className="Items_wrapper" >
      {
        data.map((element,index)=>{
          const { name, url,...other } = element;
          return(
            <Item 
              index={index} 
              other={other}
              url={url}
              name={name} 
              key={(Math.random() + 1).toString(36).substring(7)}
            />
          ) 
        })
      }  
   </div>
  )
}
export default Items;