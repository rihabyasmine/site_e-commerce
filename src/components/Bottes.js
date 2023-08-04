import React from "react"
import Format from './Formatcurrency'
export default function Bottes (props){
    return(
      
        <div className="categorie">
            <div> 
        <img src={props.img_botte} className='img-dispo' alt=""/>
        <h3>Bottine</h3>
        <h3 className='prix-botte'>{Format(props.prix)} DA</h3>
        <button className='voir-plus'>Voir Plus</button>
           </div>
           
          </div>  
       
    )
}