import React ,{ useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import databottines from './Détailsbottines'

import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'
export default function Détail () {
    const location = useLocation()
    console.log(location.state)
    const {Panier ,ajouter_au_panier} =useContext(Shopcontext)
    const amount = Panier [location.state]
    const name ="bottine"
    let nom = null ;
    let img = null;
    let couleur = null;
    let pointure = null;
    let prix = null;
 
    return (
        <div className="more-details">
            {
                databottines.map((botte)=>{
                    if(botte.id === location.state ){
                      nom= botte.name
                      img= botte.img 
                      couleur = botte.couleur
                      pointure=botte.pointure
                      prix = botte.prix

                    }
                }
                )
            }
<div className="img-container" >
<img src={img} alt="/" />
</div>
<div className="detail">
<h3 className="name-model">{nom}</h3>
<div className="color">
<div> <span className="cpp">Couleur :</span></div> 
<div className="noir"></div> 
<div className="bleu"></div> 
<div className="vert"> </div>
</div>
<div className="pointure">
<div><span className="cpp">pointure :</span></div> 
<div className="p">{pointure[0]}</div> 
<div className="p">{pointure[1]}</div> 
<div className="p"> {pointure[2]}</div>   
<div className="p">{pointure[3]} </div>  
</div>
<div className="prix"><span className="cpp">Prix :</span><span className="dinar">{Format(prix)}</span></div>
<div className=""><button className='acheter' onClick={()=>ajouter_au_panier(location.state,name)}>Ajouter au panier
{amount >0 && <>({amount})</>}</button></div>
</div>

        </div>
    )
}
