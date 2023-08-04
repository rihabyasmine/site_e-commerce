import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Notfound (){
    const navigate = useNavigate()
    useEffect ( ()=>{
        setTimeout(()=>{
            navigate("/",{state :"error"})
        },1000)
        
        
    },[])

    return (
        <h1>Not Found</h1>
    )
}