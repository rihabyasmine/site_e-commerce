import React from 'react'
import { useContext } from 'react'
import {Shopcontext} from './Shop_context'

const Elementpanier = (props) => {
    const {Panier ,ajouter_au_panier ,supp_du_panier,updatepanier} =useContext (Shopcontext)
    return (
        <div>
            <img src={props.img}/>
            {props.prix}
            <button onClick={()=>supp_du_panier(props.id)}>-</button>
            <input type='text' value={Panier[props.id]} onChange={(e) => updatepanier(Number(e.target.value),props.id)}/>
            <button onClick={()=>ajouter_au_panier(props.id)}>+</button>


        </div>
    )
}
export default Elementpanier 