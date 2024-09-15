import React , { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { useEffect, useState } from "react"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import image1_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/client/src/Images2/couv1.jpg'
import image2_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/client/src/Images2/couv3.jpg'
import image3_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/client/src/Images2/couv4.jpg'
import image4_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/client/src/Images2/couv6.jpg'
import image5_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/client/src/Images2/couv7.jpg'
import image6_slide from 'C:/Users/User/Documents/React_Project/site_e-commerce/client/src/Images2/couv8.jpg'
import {Shopcontext} from './Shop_context'
import Format from './Formatcurrency'
import data from './Détailsbottines'
import data1 from './Détailsgodasses'
import data2 from './Détailsbottes'
import { Link } from 'react-router-dom'


export default function Sldr (){
  const {Panier ,Panier1 ,Panier2 ,ajouter_au_panier} =useContext(Shopcontext)
  const bottine ="bottine"
  const godasse ="godasse"
  const botte = "botte"
  
    return (
        <div className="container-slider">
        <h2>Nouveautés</h2>
        <div className='hhh'></div>
        <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={3}
      navigation={{clickable :true}}
      pagination={{ el: '.swiper-pagination', clickable: true }}
   

      loop={true}
      modules={[EffectCoverflow,Pagination,Navigation]}
      coverflowEffect={
        {
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 2,
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
        <Link to="/detailbot" state={data[0].id} className='voir-plus nouv'>Acheter</Link> 
        </div>  
        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>  <img src={data[1].img}  alt=""/> 
        <div class="overlay"></div>
        <div className='nouv-acheter'><h3>{Format(data[1].prix)}</h3> 
        <Link to="/detailbot" state={data[1].id} className='voir-plus nouv'>Acheter</Link> </div></SwiperSlide>
        <SwiperSlide className='swiper-slider'>  <img src={data1[0].img}  alt=""/> 
        <div class="overlay"></div>
        <div className='nouv-acheter'><h3>{Format(data1[0].prix)}</h3> 
        <Link to="/detailbot" state={data1[0].id} className='voir-plus nouv'>Acheter</Link> </div> </SwiperSlide>
       <SwiperSlide className='swiper-slider'>  <img src={data1[1].img}  alt=""/> 
       <div class="overlay"></div>
       <div className='nouv-acheter'><h3>{Format(data1[1].prix)}</h3> 
       <Link to="/detailbot" state={data1[1].id} className='voir-plus nouv'>Acheter</Link> </div> </SwiperSlide>
       <SwiperSlide className='swiper-slider'>  <img src={data2[0].img}  alt=""/>
       <div class="overlay"></div>
        <div className='nouv-acheter'><h3>{Format(data2[0].prix)}</h3> 
        <Link to="/detailbot" state={data2[0].id} className='voir-plus nouv'>Acheter</Link> </div> </SwiperSlide>
       <SwiperSlide className='swiper-slider'>  <img src={data2[1].img} alt=""/>
       <div class="overlay"></div>
       <div className='nouv-acheter'><h3>{Format(data2[1].prix)}</h3> 
       <Link to="/detailbot" state={data2[1].id} className='voir-plus nouv'>Acheter</Link> </div> </SwiperSlide>
       <SwiperSlide className='swiper-slider'>  <img src={data2[1].img} alt=""/>
       <div class="overlay"></div>
       <div className='nouv-acheter'><h3>{Format(data2[1].prix)}</h3> 
       <Link to="/detailbot" state={data2[1].id} className='voir-plus nouv'>Acheter</Link> </div> </SwiperSlide>

 <div class="overlay"></div>
 <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
</Swiper>

 </div>

    )
}
/*
*/