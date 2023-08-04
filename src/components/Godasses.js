import React from 'react'
import Format from './Formatcurrency'
export default function Godasses (props){
    return(
        
            <div className="categorie">
            <div> 
        <img src={props.img_godasse} className='img-dispo' alt=""/>
        <h3>Godasse</h3>
        <h3 className='prix-godasse'>{Format(props.prix)} DA</h3>
        <button className='voir-plus'>Voir Plus</button>
           </div>
           
          </div>
        
    )
}