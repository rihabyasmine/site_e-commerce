import React, { useEffect, useState } from "react"
import Navbar from './Navbar'
import Images from '../Images'
import  '../index.css'
import Dispo from '../Dispo'
import data from '../Data'
import Slider from '../Slider'
import Footer from '../Footer'
import Navsuite from './Navsuite'
import { useLocation } from "react-router-dom"
import Sldr from './Sldr'
/*<div className="container-images">
{images.map((image) => (
    <Images img={image.urls.small} />
    
  )) }
</div>*/
export default function Home (){
const location = useLocation()

    const [images, setimages] = useState([]);
    useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=boots&client_id=KByUQZhGLYhSvvbxzEw9s5XTXG8QOEKqCGy3GPCFesg`)
        .then(response => response.json())
        .then((usefulData) => {
        
          setimages(usefulData.results.slice(0,3));
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`)
        });
    },[]);
    return (
      
        <div>
          {location.state}
<Sldr/>
<div className="container-dispo">
<h2>Catégories</h2>
<div className="dispo1">
{data.map((da) => (
 <Dispo img1={`/images/${da.img}`} id={da.id} model={da.modele} />
)
)}
</div>

</div>

<Footer />
        </div>
    )
}