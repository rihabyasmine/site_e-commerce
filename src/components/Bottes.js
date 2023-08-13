import React,{ useContext } from "react"
import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'
export default function Bottes (props){
    const {Panier2 ,ajouter_au_panier} =useContext(Shopcontext)
    const amount = Panier2 [props.id]
    const name ="botte"
    return(
      
        <div className="categorie">
            <div> 
        <img src={props.img_botte} className='img-dispo' alt=""/>
        <h3>{props.name}</h3>
        <h3 className='prix-botte'>{Format(props.prix)} DA</h3>
        <button className='voir-plus' onClick={()=>ajouter_au_panier(props.id,name)}>Ajouter au panier
        {amount >0 && <>({amount})</>}</button>
           </div>
           
          </div>  
       
    )
}