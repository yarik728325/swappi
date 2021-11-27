import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Items from "../pages/Items";
import DeteilItem from "../pages/DeteilsItem";


const Routing = () =>{
  return(
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path='/deteil' element={<Items/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/deteil/:id' element={<DeteilItem/>} />
    </Routes>
  )
}

export default Routing;