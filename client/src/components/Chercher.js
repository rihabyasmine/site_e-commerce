import React from 'react'
import data from './Détailsbottines'
import data1 from './Détailsgodasses'
import data2 from './Détailsbottes'
import Bottines from './Bottines'
import Godasses from './Godasses'
import Bottes from './Bottes'
import { useLocation } from "react-router-dom"

 
const Chercher = () => {
    const location =useLocation()
   
    const input =location.state
return (
        <div>
                {data.map((bottine)=>(
                bottine.name === input &&
                 <Bottines img_bottine={bottine.img} prix={bottine.prix} id={bottine.id} name={bottine.name}/>
            ))} 
                {data1.map((godasse)=>(
                godasse.name === input &&
                <Godasses img_godasse={godasse.img} prix={godasse.prix} id={godasse.id} name={godasse.name}/>
            ))} 
                 {data2.map((botte)=>(
                botte.name === input &&
                <Bottes img_botte={botte.img} prix={botte.prix} id={botte.id} name={botte.name} />
            ))} 

        </div>
    )
}
export default Chercher 