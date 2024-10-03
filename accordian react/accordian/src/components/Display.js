import React,{useEffect,useState} from 'react';
import axios from "axios";


const Display = () => {
   const [data,setData]= useState([])
  const [indexx,setIndez]= useState(null)
  console.log(data);
  

   const dis=(index)=>{
  
  if(indexx===index){
    setIndez(null)
  }else{
    setIndez(index)
  }
   }
    useEffect(()=>{
      const fun= async()=>{
        const responce=await axios.get('https://jsonplaceholder.typicode.com/posts')
       let  result=responce.data
       setData(result)
      }
      fun()
    },[])
  return (
    <div>

        {
           <div>
            {
                 data&&data.map((item,index)=>(
                    <div key={index}>
                        <li onClick={()=>dis(index)}>{item.title}</li>
                       {
                        indexx===index&&(
                   
                             <h1>{item.body}</h1>
                        )
                       }
                    </div>
  
                ))
            }
           </div>
        }
        
      
    </div>
  )
}

export default Display
