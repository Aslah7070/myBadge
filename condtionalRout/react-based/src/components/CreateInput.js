import React,{useState} from 'react'
import DisplaInput from './DisplaInput'

const CreateInput = () => {
    const [state,setState]=useState(null)
    const [show,setShow]=useState(false)
    console.log(state);
    
    const handleChange=(e)=>{
        setState(e.target.value)
        
    }
    const handleClick=()=>{
        setShow(true)
    
        
    }
  return (
    <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Print</button>
        {
            show&&<DisplaInput props={state}/>
        }
    </div>
  )
}

export default CreateInput
