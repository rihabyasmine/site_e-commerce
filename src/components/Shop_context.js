import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import data from './Bottinesprix'
export const Shopcontext =createContext (null);
const getdefaultpanier = ()=> {
    let panier = {}
    for (let i = 1 ; i<=10 ; i++) {
panier [i] = 0
    }
    return panier
}
const Shop_context = (props) => {
    const [Panier,setpanier] =useState(getdefaultpanier())
    const gettotalprix =() => {
        let total =0
        for (const item in Panier) {
            if(Panier[item]>0){
                let iteminfo = data.find((produit)=> produit.id=== Number(item))
                total+= Panier[item]*iteminfo.prix
            }
        }
        return total
    }
    const ajouter_au_panier = (id)=> {
       
        setpanier((prev) => ({...prev , [id]:prev[id] + 1 }))
        
    }
    console.log(Panier)
    const supp_du_panier = (id)=> {
        setpanier((prev) => ({...prev , [id]:prev[id] - 1 }))
        
    }
    const updatepanier = (nvpanier ,itemid) => {
        setpanier ((prev) =>( {
            ...prev , [itemid] : nvpanier
        }))
    }
    const contextvalue = {Panier ,ajouter_au_panier ,supp_du_panier,updatepanier,gettotalprix }
    return (
        <Shopcontext.Provider value={contextvalue}>
{props.children}
</Shopcontext.Provider>
    )
}
export default Shop_context