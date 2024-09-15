import React from 'react'
import { motion } from 'framer-motion';
//import {motion} from 'framer-motion/dist/framer-motion'
import { useRef ,useState,useEffect  } from 'react';
import images from './Image'


export default function Slider (){
const carouselref = useRef();
const [width,setwidth] =useState(0);
useEffect(()=> {
    //width of the div with classname="carousel"
    console.log(carouselref.current.scrollWidth);
    //width du contenu
    console.log(carouselref.current.offsetWidth);
    setwidth(carouselref.current.scrollWidth-carouselref.current.offsetWidth)
},[]);

    return (
        <div>
        <motion.div ref={carouselref} className='carousel'>
        <motion.div drag="x" dragConstraints={{right:0 ,left:-width}}  className='inner-carousel'>
         {images.map((image)=>(
          <motion.div className='item' key={image}> 
          <img src={image} alt=""/>
            </motion.div>   
         ))}
        </motion.div>
        </motion.div>
        </div>
    )
}