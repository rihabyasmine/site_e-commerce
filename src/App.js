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


const App = () => {
 
 return (

    <div className="container">
 
 <Navbar />


<div>
<Shop_context>
<Routes> 
<Route path="/" element={<Home />} />
<Route path="/data" element={<Data_b_g_b />} />
<Route path="/livraison" element={<Livraison/>} />
<Route path="/connex" element={<Connex/>} />
<Route path="/supportclient" element={<Supportclient/>} />
<Route path="/Panier" element={<Panier/>} />
<Route path="/Chercher" element={<Chercher/>} />
<Route path="*" element ={<Notfound/>}/>

</Routes>
</Shop_context>
</div>




</div>

 
  )
}


export default App;
