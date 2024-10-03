import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Inpitbox = () => {
   const navigate= useNavigate()
   const [number,setNumber]= useState(null)
   console.log(number);
   
    const handleChange=(e)=>{
      
      
      console.log("hello", typeof a);

        if(e.target.value%2===0){

           setNumber(e.target.value)
        }else{
          setNumber("")
        }
    }
    const clicking=()=>{
       
       navigate(`/display/${number}`)
       
        
    }
    
    
  return (
    <div>
      <input type="number"  onChange={handleChange} />
     <button onClick={clicking}>click</button>
     
    </div>
  )
}

export default Inpitbox
