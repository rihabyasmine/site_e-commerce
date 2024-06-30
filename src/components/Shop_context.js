import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import data from './Détailsbottines'
import data1 from './Détailsgodasses'
import data2 from './Détailsbottes'
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
    const [Panier1,setpanier1] =useState(getdefaultpanier())
    const [Panier2,setpanier2] =useState(getdefaultpanier())
    const gettotalprix =() => {
        let total =0
        let total1 =0
        let total2 =0
        let total3 =0
        for (const item in Panier) {
            if(Panier[item]>0){
                let iteminfo = data.find((produit)=> produit.id === Number(item))
                total1+= Panier[item]*iteminfo.prix
            }
        }
        for (const item in Panier1) {
            if(Panier1[item]>0){
                let iteminfo = data1.find((produit)=> produit.id=== Number(item))
                total2+= Panier1[item]*iteminfo.prix
            }}
            for (const item in Panier2) {
                if(Panier2[item]>0){
                    let iteminfo = data2.find((produit)=> produit.id=== Number(item))
                    total3+= Panier2[item]*iteminfo.prix
                }
        }
        total=total1+total2+total3
        return total
    }
    const ajouter_au_panier = (id,name)=> {
       
       if (name==="bottine"){setpanier((prev) => ({...prev , [id]:prev[id] + 1 }))} 
       else if (name==="godasse"){setpanier1((prev) => ({...prev , [id]:prev[id] + 1 }))}
       else if (name==="botte"){setpanier2((prev) => ({...prev , [id]:prev[id] + 1 }))}
       alert("ajouter au panier ")
        
    }
 
   
    const supp_du_panier = (id,name)=> {
        
          
       if (name==="bottine"){setpanier((prev) => ({...prev , [id]:prev[id] - 1 }))} 
       else if (name==="godasse"){setpanier1((prev) => ({...prev , [id]:prev[id] - 1 }))}
       else if (name==="botte"){setpanier2((prev) => ({...prev , [id]:prev[id]  - 1 }))}
        
    }
    const updatepanier = (nvpanier ,itemid,name) => {
   
        if (name==="bottine"){setpanier((prev) => ({...prev , [itemid] : nvpanier }))} 
        else if (name==="godasse"){setpanier1((prev) => ({...prev , [itemid] : nvpanier}))}
        else if (name==="botte"){setpanier2((prev) => ({...prev , [itemid] : nvpanier}))}
    }
    const contextvalue = {Panier ,Panier1,Panier2,ajouter_au_panier ,supp_du_panier,updatepanier,gettotalprix }
    return (
        <Shopcontext.Provider value={contextvalue}>
{props.children}
</Shopcontext.Provider>
    )
}
export default Shop_context