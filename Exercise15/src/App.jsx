import { useState } from "react";
import Greating from "./Greating";
import LanguageContext from "./LanguageContext";


function App(){
    

 const [language , setLanguage]=useState('eng')
 const toggaleLanguage=()=>{
    setLanguage((prev)=>(prev === 'eng' ? 'es': 'eng'))

 }

 return(

    

  <LanguageContext.Provider  value={language}>
    <button onClick={toggaleLanguage}> Switch to {language === 'eng'? 'Spanish' : 'English'}</button>
  <Greating/>
  </LanguageContext.Provider>
 )
  

}
export default App;