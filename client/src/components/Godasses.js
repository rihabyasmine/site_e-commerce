import React,{ useContext } from 'react'
import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'
import { Link } from "react-router-dom"
export default function Godasses (props){
    const {Panier1 ,ajouter_au_panier} =useContext(Shopcontext)
    const amount = Panier1 [props.id]
    const name ="godasse"
    return(
        
            <div className="categorie">
          
        <img src={props.img_godasse} className='img-dispo' alt=""/>
        <div className="categorie-info">
        <h3>{props.name}</h3>
        <h3 className='prix-godasse'>{Format(props.prix)} </h3>
        </div>
        <Link to="/detailgo" state={props.id} className='voir-plus'>Acheter </Link>
          
           
          </div>
        
    )
}
/** <button className='voir-plus' onClick={()=>ajouter_au_panier(props.id,name) }>Ajouter au panier
         {amount >0 && <>({amount})</>}</button> */