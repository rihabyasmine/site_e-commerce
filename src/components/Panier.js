import React from 'react'
import { useContext } from 'react'
import data from './Bottinesprix'
import Elementpanier from './Elementpanier'
import {Shopcontext} from './Shop_context'
import { useNavigate } from 'react-router-dom'
const Panier = ()=> {
    const {Panier,gettotalprix  } = useContext (Shopcontext)
    const total =gettotalprix ()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Panier</h1>
            {data.map((bottine) => {
                if (Panier [bottine.id] !== 0 ){
                    return  <Elementpanier img={bottine.img} prix= {bottine.prix} id={bottine.id} />
                }
            })

            }
            { total > 0 ? 
            <div>
                <p>{total} da</p>
                <button onClick={()=> navigate("/")}>continuer d'acheter</button>
                <button>chekout</button>
            </div>
            : <h1> your panier is empty </h1>
}
        </div>
    )
}
export default Panier