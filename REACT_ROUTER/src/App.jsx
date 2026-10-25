import {Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const[pagevisit,setPageVisit] = useState(0);
  const location= useLocation();
 useEffect(()=>{
  setPageVisit(prev => prev + 1);
 },[location])
return (

  <div>
   
   <nav className="space-x-4">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
   </nav>
 <span>Page visit: {pagevisit}</span>

 
    <Outlet />
  </div>

)
}
export default App;