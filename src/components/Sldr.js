import React , { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import { useEffect, useState } from "react"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import image1_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/src/Images2/couv1.jpg'
import image2_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/src/Images2/couv3.jpg'
import image3_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/src/Images2/couv4.jpg'
import image4_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/src/Images2/couv6.jpg'
import image5_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/src/Images2/couv7.jpg'
import image6_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/src/Images2/couv8.jpg'
import data from './Détailsbottines'
import data1 from './Détailsgodasses'
import data2 from './Détailsbottes'
import {Shopcontext} from './Shop_context'
import Format from './Formatcurrency'


export default function Sldr (){
  const {Panier ,Panier1 ,Panier2 ,ajouter_au_panier} =useContext(Shopcontext)
  const bottine ="bottine"
  const godasse ="godasse"
  const botte = "botte"
  
    return (
        <div className="container-slider">
          <h2>Nouveautés</h2>
<Swiper
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={3}
      navigation={{clickable :true}}
      pagination={{
        el: '.my-custom-pagination-div',
        clickable: true
      }}
      effect={'coverflow'}

      loop={true}
      modules={[EffectCoverflow,Pagination,Navigation]}
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows : false}
        }
      className="swiper_container"
      style={{
       
        "--swiper-navigation-color": " #CD853F",
        
      }}
    >
  <SwiperSlide className='swiper-slider'>  
  <img src={data[0].img} alt=""/>
  <div class="overlay"></div>
  <div className='nouv-acheter'>
  <h3>{Format(data[0].prix)}</h3> 
  <button onClick={()=>ajouter_au_panier(data[0].id,bottine) }>Acheter {Panier[data[0].id] >0 && Panier[data[0].id] } </button>
  </div>  
  </SwiperSlide>
  <SwiperSlide className='swiper-slider'>  <img src={data[1].img}  alt=""/> 
  <div class="overlay"></div>
  <div className='nouv-acheter'><h3>{Format(data[1].prix)}</h3> 
  <button onClick={()=>ajouter_au_panier(data[1].id,bottine) }>Acheter {Panier[data[1].id] >0 && Panier[data[1].id] }</button></div></SwiperSlide>
  <SwiperSlide className='swiper-slider'>  <img src={data1[0].img}  alt=""/> 
  <div class="overlay"></div>
  <div className='nouv-acheter'><h3>{Format(data1[0].prix)}</h3> 
  <button onClick={()=>ajouter_au_panier(data1[0].id,godasse) }>Acheter {Panier1[data[0].id] >0 && Panier1[data[0].id] }</button></div> </SwiperSlide>
 <SwiperSlide className='swiper-slider'>  <img src={data1[1].img}  alt=""/> 
 <div class="overlay"></div>
 <div className='nouv-acheter'><h3>{Format(data1[1].prix)}</h3> 
 <button onClick={()=>ajouter_au_panier(data1[1].id,godasse) }>Acheter {Panier1[data[1].id] >0 && Panier1[data[1].id] }</button></div> </SwiperSlide>
 <SwiperSlide className='swiper-slider'>  <img src={data2[0].img}  alt=""/>
 <div class="overlay"></div>
  <div className='nouv-acheter'><h3>{Format(data2[0].prix)}</h3> 
 <button onClick={()=>ajouter_au_panier(data2[0].id,botte) }>Acheter {Panier2[data[0].id] >0 && Panier2[data[0].id] }</button></div> </SwiperSlide>
 <SwiperSlide className='swiper-slider'>  <img src={data2[1].img} alt=""/>
 <div class="overlay"></div>
 <div className='nouv-acheter'><h3>{Format(data2[1].prix)}</h3> 
 <button onClick={()=>ajouter_au_panier(data2[1].id,botte) }>Acheter {Panier2[data[1].id] >0 && Panier2[data[1].id] } </button></div> </SwiperSlide>
</Swiper>
 
        
          <div className="my-custom-pagination-div"/>
  
      </div>

    )
}
