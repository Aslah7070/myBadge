import React, { useEffect, useState } from 'react'
import axios from "axios"

const Fetch = () => {
   const [stte,sette] =useState()
   console.log(stte);
   
    useEffect(()=>{
        try {
            const fun= async()=>{
                const responce=await  axios.get("https://jsonplaceholder.typicode.com/users")
              const result= await responce.data
              console.log(result);
              
              sette(result)
                
            }
            fun()
        } catch (error) {
            console.log(error);
            
        }

    },[])
  return (
    <div>
          {
           stte&&stte.map((val)=>(
                <li>{val.name}</li>
            ))
          }
    </div>
  )
}

export default Fetch
