import React from 'react'
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
/*
navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Navigation]}

coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 
            
            0,
            modifier: 0,
            slideShadows : true}
          }
       
*/ 

export default function Sldr (){
  
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
          depth: 100,
          modifier: 0.5,
          slideShadows : false}
        }
      className="swiper_container"
      style={{
       
        "--swiper-navigation-color": " #CD853F",
        
      }}
    >
  <SwiperSlide className='swiper-slider'>  <img src={image1_slide} alt=""/><div className='nouv-acheter'>
  <h3>5000 DA</h3> 
  <button>Acheter</button>
  </div>  
  </SwiperSlide>
  <SwiperSlide className='swiper-slider'>  <img src={image1_slide} alt=""/> <div className='nouv-acheter'><h3>5000 DA</h3> <button>Acheter</button></div></SwiperSlide>
  <SwiperSlide className='swiper-slider'>  <img src={image1_slide} alt=""/> <div className='nouv-acheter'><h3>5000 DA</h3> <button>Acheter</button></div> </SwiperSlide>
 <SwiperSlide className='swiper-slider'>  <img src={image1_slide} alt=""/> <div className='nouv-acheter'><h3>5000 DA</h3> <button>Acheter</button></div> </SwiperSlide>
 <SwiperSlide className='swiper-slider'>  <img src={image1_slide} alt=""/> <div className='nouv-acheter'><h3>5000 DA</h3> <button>Acheter</button></div> </SwiperSlide>
 <SwiperSlide className='swiper-slider'>  <img src={image1_slide} alt=""/><div className='nouv-acheter'><h3>5000 DA</h3> <button>Acheter</button></div> </SwiperSlide>

            
    </Swiper>
 
        
          <div className="my-custom-pagination-div"/>
  
      </div>

    )
}
