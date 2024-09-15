import React, { useState } from 'react'
import {FaRegCheckSquare,FaShoppingCart,FaRegUser,FaUnlockAlt} from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { BsCart,BsSearch } from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom"
import Chercher from './Chercher'
const Navbar = () => {
const [input ,setinput] = useState('')
const [show ,setshow] = useState(false)
 return (
  <nav className='container-nav'>
    <div></div>
     <div>  <h1><Link to="/" className='title'>ANSO</Link></h1> </div>   
     <div className='search-bar'>
      <input type="search" className='input' placeholder='Que cherchez-vous?' onChange={e => setinput(e.target.value)} /> 
      <Link to="/Chercher" state={input}><BsSearch className='search'  /></Link>    
     </div>
      <div className={show ? " mobile-modele" : "modele"}>

            <ul>
            <li><Link to="/data" state="1"   className='link1'>bottines</Link></li>
            <li><Link to="/data"  state="2" className='link1'>godasses</Link></li>   
            <li><Link to="/data"   state="3" className='link1'>bottes</Link></li>
          </ul>
      </div>


      <div className='shop-user'> 
         <div >
        <Link to="/Panier">
          <BsCart  className='fa'/>
          </Link>  
         </div>
           <div className='menu-container'>
       <Link to='/connex'> <AiOutlineUser className='fa'/> </Link>    
        </div>
            </div>
            <div></div>
            <div className='hamburger-menu' onClick={() => setshow(!show)}>
            <GiHamburgerMenu className='hamburger-menu-icon'  />
            </div>
      
  </nav>
    )
}


export default Navbar 
/*
  <div className='dropdown-menu'>
                <ul>
        <li className='dropdownitem'>
    <FaUnlockAlt className='icon'/> 
    <Link  to='/connex'className='link2'>CONNEXION</Link>
    </li>
    <li className='dropdownitem'>
    <FaRegCheckSquare className='icon'/> 
    <Link className='link2'>COMMANDER </Link>
    </li>
     <li className='dropdownitem'>
    <FaRegUser className='icon'/> 
    <Link className='link2'>MON COMPTE </Link>
    </li>
     <li className='dropdownitem'>
    <FaShoppingCart className='icon'/> 
    <Link  to='/Panier' className='link2'>PANIER </Link>
    </li>
    </ul>
  
              
            </div>*/
