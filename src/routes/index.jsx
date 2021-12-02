import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import DeteilItem from "../pages/DeteilsItem";


const Routing = () =>{
  return(
    <Routes>
      <Route path="/swappi"  element={<Home/>} />
      <Route path="/"  element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/character/:id' element={<DeteilItem/>} />
    </Routes>
  )
}

export default Routing;