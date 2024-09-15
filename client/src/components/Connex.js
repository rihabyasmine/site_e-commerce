import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../Footer'
import axios from "axios"

import { useId } from 'react'
const Connex = () =>{
  const [email ,setemail] = useState ('')
  const [password ,setpassword] = useState ('')
  const [redirect,setredirect] = useState(false)
  async function handleloginsubmit (ev) {
    ev.preventDefault()
    try {
      const data=await axios.post ('/login',{email,password})
      alert ('login succeful')
      setredirect(true)
    } 
    catch(err) {
        console.log(err)
    }
    

}
if(redirect) {
    return <Navigate to={'/CompteUser'}/>
}


  return (
    <div >
      <div className='container-connex'>
      <div className='connexion'>
        <form onSubmit={handleloginsubmit}>  
        <div className='déja-client'>
           <h3>CONNECTE TOI A TON COMPTE</h3>
           <h3>Déja client(e)</h3>
           <label htmlFor='email'>Identifiant ou e-mail</label>
           <input type='text' name='email' value={email} onChange={ev => setemail(ev.target.value)} required/>
           <br/>
           <label htmlFor='password'>Mot de passe</label>
           <input type='password' name='motdepasse' value={password} onChange={ev => setpassword (ev.target.value )}/>
           <button className='se-connecter'>Login</button>
           <Link to='/Create_Compte' className='inscription'>Si vous n'avez pas de compte inscrivez vous içi </Link>
        </div>
        </form>
       </div>
      </div>
     <Footer />
   </div>
    )
}
export default Connex ;