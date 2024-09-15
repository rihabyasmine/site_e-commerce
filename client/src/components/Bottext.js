import React,{ useContext, useState } from "react"
import {Shopcontext} from './Shop_context'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { scrollbar, Pagination, Navigation } from 'swiper';
import databottes from './Détailsbottes'
export default function Bottext (props) {
    const [choufni0 ,setchoufni0] = useState(false)
   
    const [see , setsee] = useState(false)
  
 function choufouni (param){
        if (param === 0 ) {
          setchoufni0(true)
        
       
        }
      
      }
              
      
         
    function show (){
        setsee (!see)
    }
return (
    <div></div>

)
}