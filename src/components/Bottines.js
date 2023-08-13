import React, { useContext } from 'react'
import  '../index.css'
import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'


const Bottines = (props) => {
    
    const {Panier ,ajouter_au_panier} =useContext(Shopcontext)
    const amount = Panier [props.id]
    const name ="bottine"
    
    return(
      
            <div className='categorie'> 
        <img src={props.img_bottine} className='img-dispo' alt=""/>
        <h3>{props.name}</h3>
        <h3 className='prix-bottine'>{Format(props.prix)} </h3>
        <div>
          
                <button className='voir-plus' onClick={()=>ajouter_au_panier(props.id,name) }>Ajouter au panier 
                {amount >0 && <>({amount})</>}</button>
          
            
        </div>
        
           </div>
           
          )
}
export default Bottines 