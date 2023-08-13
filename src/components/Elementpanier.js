import React from 'react'
import { useContext } from 'react'
import {Shopcontext} from './Shop_context'
import Format from './Formatcurrency'

const Elementpanier = (props) => {

    const {Panier ,Panier1 ,Panier2 ,ajouter_au_panier ,supp_du_panier,updatepanier} =useContext (Shopcontext)
    return (
        <div className='container_element_panier'>
            <div>
            <h3>Produit</h3>
            <img src={props.img}/>
            </div>
          <div>
            <h3>Prix</h3>
           {Format(props.prix)}
          </div>
          <div>
            <h3>Quantité</h3>
          <button onClick={()=>supp_du_panier(props.id,props.name)}>-</button>
{props.name==="bottine" && <input type='text' value={Panier[props.id]} onChange={(e) => updatepanier(Number(e.target.value),props.id,props.name)}/>}
{props.name==="godasse" && <input type='text' value={Panier1[props.id]} onChange={(e) => updatepanier(Number(e.target.value),props.id,props.name)}/>}    
{props.name==="botte" && <input type='text' value={Panier2[props.id]} onChange={(e) => updatepanier(Number(e.target.value),props.id,props.name)}/>}              
          <button onClick={()=>ajouter_au_panier(props.id,props.name)}>+</button>

          </div>



        </div>
    )
}
export default Elementpanier 