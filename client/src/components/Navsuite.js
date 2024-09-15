import React from 'react'
import '../index'
import {Link ,useMatch , useResolvedPath} from "react-router-dom"
export default function Navsuite (){
    return(
       
            
            <div className='liste1'>
            <Link to="/livraison"><span>Livraison</span> toutes les wilayas</Link>
            <a href="#"><span>Nouveautés</span> chaque semaine</a>
            <a href="#"><span>Stock</span> limité</a>
            </div>
    )
}