import React, { useState } from 'react'
import {FaRegCheckSquare,FaShoppingCart,FaRegUser,FaUnlockAlt} from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { BsCart,BsSearch } from "react-icons/bs";
import {Link} from "react-router-dom"
/*${open ? 'active' : 'inactive'}
 */ 
const Navbar = () => {
const [show, setshow]= useState (false)
const [show1, setshow1]= useState (false)
const [open ,setopen] = useState (false)
const Show = ()=> show ? setshow(false) : setshow(true)

  console.log('show1' + show1)
    return (
  <div className='container-nav'>
    
      <h1><Link to="/" className='title'>ANSO</Link> </h1> 
      <form action="" className='search-bar'>
          <input type="search" placeholder='Que cherchez-vous?' /> 
          <button type='submit'><BsSearch className='search'  /> </button> 
      </form>
      <div className='shoes'>
            <ul>
            <li><Link to="/data" state="1"   className='link1'>BOTTINES</Link></li>
            <li><Link to="/data"  state="2" className='link1'>GODASSES</Link></li>   
            <li><Link to="/data"   state="3" className='link1'>BOTTES</Link></li>
          </ul>
      </div>
      <div className='shop-user'> 
      
         <div >
        <Link to="/Panier"><button className='shopping-cart'><BsCart  className='fa'/>
          <div className='circle'>3</div>
          </button></Link>  
         
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
    <Link className='link2'>PANIER </Link>
    </li>
    </ul>
  
              
            </div>
            </div>
            </div>
    
      
  </div>
    )
}


export default Navbar 
