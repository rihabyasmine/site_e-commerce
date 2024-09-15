import React from 'react'
import {FaInstagram,FaFacebookF} from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Footer (){
    return (
        <div className='container-footer'>
            <div className='footer-title'>
            <h1>ANSO</h1>
            </div>
            <div className='support-client'>
              <h3>SUPPORT CLIENT</h3>
             <ul>
                <li><Link to="/supportclient" state="1" className='link3'>Commande</Link></li>
                <li><Link to="/supportclient" state="2" className='link3'>Livraison</Link></li>
                <li><Link to="/supportclient" state="3" className='link3'>Retour</Link></li>
                <li><Link to="/supportclient" state="4" className='link3'>Contactez Nous</Link></li>
                <li><Link to="/supportclient" state="5" className='link3'>FAQs</Link></li>
                <li><Link to="/supportclient" state="6" className='link3'>CGVs</Link></li>
             </ul>
                
            </div>
            <div className='suivez-nous'>
               <h3>SUIVEZ NOUS</h3>  
                <FaInstagram className='insta'/>
                <FaFacebookF className='face'/>
            </div>
        </div>
    )
}