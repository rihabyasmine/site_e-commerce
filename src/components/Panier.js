import React from 'react'
import { useContext } from 'react'
import data from './Détailsbottines'
import data1 from './Détailsgodasses'
import data2 from './Détailsbottes'
import Elementpanier from './Elementpanier'
import {Shopcontext} from './Shop_context'
import { useNavigate } from 'react-router-dom'
import Format from './Formatcurrency'
const Panier = ()=> {
    const {Panier,Panier1,Panier2,gettotalprix  } = useContext (Shopcontext)
    const total =gettotalprix ()
    const navigate = useNavigate()
 
    return (
        <div className='container_panier'>
            <h1 className='panier'>Panier</h1>
            {data.map((bottine) => {
                if (Panier [bottine.id] !== 0 ){
                    return  <Elementpanier img={bottine.img} prix= {bottine.prix} id={bottine.id} name={"bottine"} />
                }
            })

            }
               {data1.map((godasse) => {
                if (Panier1 [godasse.id] !== 0 ){
                    return  <Elementpanier img={godasse.img} prix= {godasse.prix} id={godasse.id} name={ "godasse"} />
                }
            })

            }
             {data2.map((botte) => {
                if (Panier2 [botte.id] !== 0 ){
                    return  <Elementpanier img={botte.img} prix= {botte.prix} id={botte.id} name={"botte"} />
                }
            })

            }
            { total > 0 ? 
            <div>
                <p>TOTAL : {Format(total)} </p>
                <button className='button_panier'onClick={()=> navigate("/")}>continuer d'acheter</button>
                
            </div>
            : <h1> your panier is empty  </h1>
}
        </div>
    )
}
export default Panier