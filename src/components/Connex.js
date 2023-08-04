import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
const Connex = () =>{
  return (
    <div className='container-connex' >
      <div className='title-connex'>
      <h2>Commandes</h2>
      <h3>CONNECTE TOI A TON COMPTE</h3>
      </div>
      
      <div className='connexion'>
        <div className='déja-client'>
           <h3>Déja client(e)</h3>
           <label htmlFor='email'>Identifiant ou e-mail</label>
           <input type='text' name='email' required/>
           <br/>
           <label htmlFor='password'>Mot de passe</label>
           <input type='password' name='motdepasse'/>
           <button className='se-connecter'>ME CONNECTER</button>
           <Link to='' className='perdu'>Mot de passe perdu ?</Link>
        </div>
        <div className='nouveau-compte'>
       <h3>Créer un nouveau compte</h3>
         <label htmlFor='nom'>Nom</label>
           <input type='text' name='nom' required/>
           <label htmlFor='prenom'>Prénom</label>
           <input type='text' name='Prénom' required/>
             <label htmlFor='email'>E-mail</label>
           <input type='text' name='email' required/>
             <label htmlFor='motdepasse'>Mot de passe</label>
           <input type='password' name='motdepasse' required/>
           <button className='creer'>CREER MON COMPTE</button>

           

        </div>
      </div>
     <Footer />
   </div>
    )
}
export default Connex ;