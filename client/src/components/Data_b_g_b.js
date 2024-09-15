import React from "react"
import { useState,useEffect } from "react"
import "../index.css"
import databottines from './Détailsbottines'
import datagodasses from './Détailsgodasses'
import databottes from './Détailsbottes'

import data from './Détailsbottines'
import Bottines from './Bottines'
import Godasses from "./Godasses"
import Bottes from "./Bottes"
import { useLocation } from "react-router-dom"

const Data_b_g_b = () => {
  const location =useLocation()
  console.log(location.state)
   const dt= location.state
 
    const [bottines,setbottines] = useState ([]);
    const [godasses,setgodasses] = useState ([]);
    const [bottes,setbottes] = useState ([]);
   
 
    
   
    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=ankel-boots&client_id=KByUQZhGLYhSvvbxzEw9s5XTXG8QOEKqCGy3GPCFesg`)
            .then(response => response.json())
            .then((usefulData) => {
            
              setbottines(usefulData.results);
             
              
            })
            .catch((e) => {
              console.error(`An error occurred: ${e}`)
            });
        },[]);
        useEffect(() => {
          fetch(`https://api.unsplash.com/search/photos?query=shoes&client_id=KByUQZhGLYhSvvbxzEw9s5XTXG8QOEKqCGy3GPCFesg`)
              .then(response => response.json())
              .then((usefulData) => {
              
                setgodasses(usefulData.results);
               
                
              })
              .catch((e) => {
                console.error(`An error occurred: ${e}`)
              });
          },[]);
          useEffect(() => {
            fetch(`https://api.unsplash.com/search/photos?query=boots&client_id=KByUQZhGLYhSvvbxzEw9s5XTXG8QOEKqCGy3GPCFesg`)
                .then(response => response.json())
                .then((usefulData) => {
                
                  setbottes(usefulData.results);
                 
                  
                })
                .catch((e) => {
                  console.error(`An error occurred: ${e}`)
                });
            },[]);
      
        
    
            return (
        <div >
          <div className="dispo">
            
          { dt ==="1" && databottines.map((bottine) => (
   
   <Bottines img_bottine={bottine.img} prix={bottine.prix} id={bottine.id} name={bottine.name} />
  
)) }
          </div>
         
      
        
          <div className="dispo">
          { dt==="2" && datagodasses.map((godasse) => (
   
   <Godasses img_godasse={godasse.img} prix={godasse.prix} id={godasse.id} name={godasse.name}/>
)) }  
          </div>
        
 <div className="dispo"> 
 {dt==="3" && databottes.map((botte) => (

   
<Bottes img_botte={botte.img} prix={botte.prix} id={botte.id} name={botte.name} couleur={botte.couleur} pointure={botte.pointure} />
)) } 
</div>         

 
          
          
        </div>
    )
}
export default Data_b_g_b