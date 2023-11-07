import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import { useId } from 'react'
const Connex = () =>{
 const user = useNavigate()
 


const [info ,setinfo] = useState({
  
  nom:"",
  prenom:"",
  email:"",
  motdepasse:""
})
const [enrg,setenrg] = useState({
  email :"",
  motdepasse:""
})
const [data,setdata] = useState([])
const getdata = (e)=> {
  const {value,name} = e.target 
setenrg (()=> {
 return{
    ...enrg,
    [name]:value
  }
})
}
const seconnecter = (e) => {
  e.preventDefault()
const { email , motdepasse} = enrg
if (email === "")
  {
    alert("fauuuuuuux")
}
else if (motdepasse === ""){
   alert("fauuux")
} 
for (let i = 0 ; i < localStorage.length ; i++) {
  let j = 1;
   const key = localStorage.key(i)
   const getuser= localStorage.getItem(key)
   const userdata = JSON.parse(getuser)
  if(userdata.email === email && userdata.motdepasse === motdepasse)
  {
    user("/CompteUser")
  }
  j++;
  if (j=== localStorage.length ){
    alert("compte innéxistant")
  }
}}
const handleChange= (e)=> {
const {value ,name} = e.target
  setinfo(()=>{
    return{
      ...info ,
      [name]:value
    }
  })
  
}
  const click = (e)=>{
    e.preventDefault()
const {nom,prenom,email,motdepasse} = info
if(nom=== ""  )
{
  alert("requireeeed")
}
else if (!email.includes('@')){
  alert ("@@@@@@@@")
}
else if (motdepasse.length < 7){
  alert("sghéér")
}
else {
  alert("succeeeeeeeeees")
}
var id = Math.floor((Math.random()*100000000)+1)
var userid = String(id) 


localStorage.setItem(userid, JSON.stringify(...data ,info));

  }


  return (
    <div className='container-connex'>
      <div className='title-connex'>
      <h2>Commandes</h2>
      <h3>CONNECTE TOI A TON COMPTE</h3>
      </div>
      <div className='connexion'>
        <form>
        <div className='déja-client'>
           <h3>Déja client(e)</h3>
           <label htmlFor='email'>Identifiant ou e-mail</label>
           <input type='text' name='email' onChange={getdata} required/>
           <br/>
           <label htmlFor='password'>Mot de passe</label>
           <input type='password' name='motdepasse' onChange={getdata}/>
           <button className='se-connecter' type='submit' onClick={seconnecter}>ME CONNECTER</button>
           <Link to='' className='perdu'>Mot de passe perdu ?</Link>
        </div>

        </form>
       
        <form  >
        <div className='nouveau-compte'>
       <h3>Créer un nouveau compte</h3>
         <label htmlFor='nom'>Nom</label>
           <input type="text" name='nom'  onChange={handleChange}required/>
           <label htmlFor='prenom'>Prénom</label>
           <input type='text' name='prenom'  onChange={handleChange}  required/>
             <label htmlFor='email'>E-mail</label>
           <input type='text' name='email'  onChange={handleChange}required/>
             <label htmlFor='motdepasse'>Mot de passe</label>
           <input type='password' name='motdepasse'  onChange={handleChange} required/>
           <button className='creer' type="submit" onClick={click} >creer un compte </button>

           

        </div>
        </form>
       
      </div>
     <Footer />
   </div>
    )
}
export default Connex ;