import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Display = () => {
   const {number}= useParams()

  const navigate= useNavigate()
   
    
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>navigate("/")} >click</button>
    </div>
  )
}

export default Display
