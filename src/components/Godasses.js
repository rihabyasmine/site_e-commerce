import React,{ useContext } from 'react'
import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'
export default function Godasses (props){
    const {Panier1 ,ajouter_au_panier} =useContext(Shopcontext)
    const amount = Panier1 [props.id]
    const name ="godasse"
    return(
        
            <div className="categorie">
            <div> 
        <img src={props.img_godasse} className='img-dispo' alt=""/>
        <h3>{props.name}</h3>
        <h3 className='prix-godasse'>{Format(props.prix)} DA</h3>
        <button className='voir-plus' onClick={()=>ajouter_au_panier(props.id,name) }>Ajouter au panier
         {amount >0 && <>({amount})</>}</button>
           </div>
           
          </div>
        
    )
}