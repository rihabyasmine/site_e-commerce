import React,{ useContext, useState } from "react"
import Format from './Formatcurrency'
import {Shopcontext} from './Shop_context'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { scrollbar, Pagination, Navigation } from 'swiper';
import Bottext from "./Bottext"
import databottes from './Détailsbottes'
import { Link } from "react-router-dom"


export default function Bottes (props){
   
    
    const [blur ,setblur] = useState()

 
    
    return(
      
      
        <div className="categorie"> 
        <img src={props.img_botte} className='img-dispo' alt=""/>
        <div className="categorie-info">
        <h3>{props.name}</h3>
        <h3 className='prix-botte'>{Format(props.prix)} </h3>
        </div>
       
        <Link to="/detail" state={props.id} className='voir-plus'>Acheter </Link>
        
        </div>
     
     
          
           
           
       
    )
}
/*
<img src={props.img_botte} className='more-details-img' alt=""/>
*/
/*
<h3 className='more-details-prix-botte'>{Format(props.prix)} DA</h3>
        <div className="more-details-couleur">
        <button>{props.couleur[0]}</button>
        <button>{props.couleur[1]}</button>
        <button>{props.couleur[2]}</button>
        <button>{props.couleur[3]}</button>
        </div>
       <div className="more-details-poiture">
       <button>{props.pointure[0]}</button>
       <button>{props.pointure[1]}</button>
       <button>{props.pointure[2]}</button>
       </div>
      



        /*
         <Swiper
      
        slidesPerView={3}
       direction={'vertical'}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]}
    
       
     className="mySwpr">
    <SwiperSlide className="swper-slde" ><img src={databottes[0].img} className='more-details-img'   alt=""/></SwiperSlide>
    <SwiperSlide className="swper-slde" ><img src={databottes[0].img} className='more-details-img' alt=""/></SwiperSlide>
    <SwiperSlide className="swper-slde"><img src={databottes[0].img} className='more-details-img' alt=""/></SwiperSlide>
    <SwiperSlide className="swper-slde"><img src={databottes[0].img} className='more-details-img' alt=""/></SwiperSlide>
    <SwiperSlide className="swper-slde"><img src={databottes[0].img} className='more-details-img' alt=""/></SwiperSlide>
    <SwiperSlide className="swper-slde"><img src={databottes[0].img} className='more-details-img' alt=""/></SwiperSlide>
    <SwiperSlide className="swper-slde"><img src={databottes[0].img} className='more-details-img' alt=""/></SwiperSlide>
    
    </Swiper>
    */