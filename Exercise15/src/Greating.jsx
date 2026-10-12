import { useContext } from "react";
import LanguageContex from "./LanguageContext";

 function Greating(){
    const language= useContext(LanguageContex)

    const messages = {
        eng: "Hello!",
         es: "!HELLA"

    };
    

     return <h1>{messages[language]}</h1>;

 }

 export default Greating