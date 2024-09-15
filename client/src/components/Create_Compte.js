import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import axios from "axios"
export default function Create_Compte () {
const [nom,setnom] =useState ('');
const [prenom,setprenom] =useState ('');
const [email,setemail] =useState ('');
const [password,setpassword] =useState ('');
const register = async (ev) =>  {
  //for not to reload the page 
  ev.preventDefault();
  try {
      await axios.post('/register',{
          nom ,
          prenom,
          email ,
          password
});
        
          alert ('Registration succeful , now you can log in')

  }
  catch (err) {
      console.log(err.response.data)
 
  }

 }
    return (
      <div>
        <form onSubmit={register}  >
        <div className='container-connex'>
          <div className='déja-client'>
       <h3>Créer un nouveau compte</h3>
         <label htmlFor='nom'>Nom</label>
           <input type="text" name='nom' value={nom} onChange={ev=>setnom(ev.target.value)} required/>
           <label htmlFor='prenom'>Prénom</label>
           <input type='text' name='prenom' value={prenom} onChange={ev=>setprenom(ev.target.value)}required/>
             <label htmlFor='email'>E-mail</label>
           <input type='text' name='email' value={email} onChange={ev=>setemail(ev.target.value)}required/>
             <label htmlFor='motdepasse'>Mot de passe</label>
           <input type='password' name='motdepasse' value={password} onChange={ev=>setpassword(ev.target.value)}required/>
           <button className='se-connecter'>Enregistrer</button>
           <Link  to="/connex" className='inscription'> Log-in </Link>
           </div>
          </div>
        </form>
        <Footer/>
        </div>
    )
}