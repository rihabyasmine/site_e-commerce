import React, { useContext } from 'react'
import  '../index.css'
import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'
import { Link } from "react-router-dom"

const Bottines = (props) => {
    
    const {Panier ,ajouter_au_panier} =useContext(Shopcontext)
    const amount = Panier [props.id]
    const name ="bottine"
    
    return(
      
            <div className='categorie'> 
        <img src={props.img_bottine} className='img-dispo' alt=""/>
        <div className="categorie-info">
        <h3>{props.name}</h3>
        <h3 className='prix-bottine'>{Format(props.prix)} </h3>
        </div>
        <Link to="/detailbot" state={props.id} className='voir-plus'>Acheter  </Link>
     
        </div>
           
          )
}
export default Bottines 
/**
    <button className='voir-plus' onClick={()=>ajouter_au_panier(props.id,name) }>Ajouter au panier 
        {amount >0 && <>({amount})</>}</button>
 */