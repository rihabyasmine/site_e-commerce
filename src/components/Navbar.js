import React, { useState } from 'react'
import {FaRegCheckSquare,FaShoppingCart,FaRegUser,FaUnlockAlt} from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { BsCart,BsSearch } from "react-icons/bs";
import {Link} from "react-router-dom"
import Chercher from './Chercher'
/*${open ? 'active' : 'inactive'}
 */ 
const Navbar = () => {
const [input ,setinput] = useState('')

 return (
  <div className='container-nav'>
    
     <div>  <h1><Link to="/" className='title'>ANSO</Link></h1> </div>   
     <div className='search-bar'>
      <input type="search" placeholder='Que cherchez-vous?' onChange={e => setinput(e.target.value)} /> 
      <Link to="/Chercher" state={input}><BsSearch className='search'  /></Link>    
     </div>
    
      <div className='modele'>
            <ul>
            <li><Link to="/data" state="1"   className='link1'>BOTTINES</Link></li>
            <li><Link to="/data"  state="2" className='link1'>GODASSES</Link></li>   
            <li><Link to="/data"   state="3" className='link1'>BOTTES</Link></li>
          </ul>
      </div>
      <div className='shop-user'> 
         <div >
        <Link to="/Panier">
          <BsCart  className='fa'/>
          </Link>  
         </div>
           <div className='menu-container'>
            <AiOutlineUser className='fa'/> 
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
  
              
            </div>
            </div>
            </div>
    
      
  </div>
    )
}


export default Navbar 
