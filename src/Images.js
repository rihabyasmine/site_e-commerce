import React from "react"
import index from './index.css'
export default function Images (props){
    
    return (
        <div >
          <img src={props.img} className="image"  alt="" />
        </div>
    )
}