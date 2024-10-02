import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Inpitbox = () => {
   const navigate= useNavigate()
   const [number,setNumber]= useState(null)
    const handleChange=(e)=>{
        setNumber(e)
    }
    const clicking=()=>{
       
        
           console.log("fhds");
           navigate(`/display/${number}`)
          
        
    }
    
    
  return (
    <div>
      <input type="number"  onChange={(e)=>handleChange(Number(e.target.value))} />
     <button onClick={clicking}>click</button>
     
    </div>
  )
}

export default Inpitbox
