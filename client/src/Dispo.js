import React from "react"
import { Link } from "react-router-dom";
export default function Dispo (props){
    return (
        
         <div>
            
             <Link to="/data" state={props.id} className="link5"  > 
       <img src={props.img1} alt=""/>
       <h3>{props.model}</h3>
       </Link>
         </div>    
      
  
           
            
      
    )
}