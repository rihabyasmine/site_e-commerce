import React, { useEffect, useState } from "react"
import {   Route , Routes} from 'react-router-dom'
import Bottines from "./components/Bottines"
import Connex from "./components/Connex"
import Data_b_g_b from "./components/Data_b_g_b"
import Home  from "./components/Home"
import Livraison from "./components/Livraison"
import Navbar from './components/Navbar'
import Notfound from "./Notfound"
import Supportclient from "./components/Supportclient"
import CGVs from "./components/CGVs"
import Panier from "./components/Panier"
import Shop_context from "./components/Shop_context"
import Chercher from "./components/Chercher"
import CompteUser from "./components/CompteUser"
import Create_Compte from "./components/Create_Compte"
import Détail from "./components/Détail"
import Détailbot from "./components/Détailbot"
import Détailgo from "./components/Détailgo"
import axios from "axios"
axios.defaults.baseURL= 'http://localhost:4000'
axios.defaults.withCredentials = true 


const App = () => {
 
 return (

    <div className="container">
 
 <Navbar />


<div>
<Shop_context>
<Routes> 
<Route path="/" element={<Home/>} />
<Route path="/data" element={<Data_b_g_b/>} />
<Route path="/livraison" element={<Livraison/>} />
<Route path="/connex" element={<Connex/>} />
<Route path="/supportclient" element={<Supportclient/>} />
<Route path="/Panier" element={<Panier/>} />
<Route path="/Chercher" element={<Chercher/>} />
<Route path="/CompteUser" element={<CompteUser/>} />
<Route path="/Create_Compte" element={<Create_Compte/>} />
<Route path="/detail" element={<Détail/>} />
<Route path="/detailbot" element={<Détailbot/>} />
<Route path="/detailgo" element={<Détailgo/>} />
<Route path="*" element ={<Notfound/>}/>

</Routes>
</Shop_context>
</div>




</div>

 
  )
}


export default App;
