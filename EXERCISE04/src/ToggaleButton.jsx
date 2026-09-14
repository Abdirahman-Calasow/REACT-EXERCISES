import { useState } from "react";

const ToggaleButton = () => {
 const [isturn , setIsturn]=useState(false)
    const Toggale =()=>{
        setIsturn(!isturn)

    }
  return (
    <>
     
     
     <h2>The button is  {isturn ? "ON" : "OFF"}</h2> 
      <button onClick={Toggale}> {isturn ? " TURN OF" : " TURN ON"} </button>
    </>
  );
};
export default ToggaleButton;
