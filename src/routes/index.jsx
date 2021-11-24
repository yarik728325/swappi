import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PlayList from "../pages/Playlist";
import NotFound from "../pages/NotFound";
import Deteils from "../pages/Deteils";


const Routing = () =>{
  return(
    <Routes>
      <Route path="/playlist"  element={<PlayList/>} />
      <Route path="/"  element={<Home/>} />
      <Route path='/deteil' element={<Deteils/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default Routing;