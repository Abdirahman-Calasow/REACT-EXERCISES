import {Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";

function App() {
  const[pagevisit,setPageVisit] = useState(0);
  const location= useLocation();
 useEffect(()=>{
  setPageVisit(prev => prev + 1);
 },[location])


return (

  <div>
   



  <Nav/>
 
 <main>
  <Outlet/>
 </main>

  </div>
 
)
}
export default App;