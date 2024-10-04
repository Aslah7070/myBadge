import React from 'react'

const DisplaInput = ({props}) => {
    console.log("gdshagyu",props);
    
    
  return (
    <div>
        
           <h1>{[...props].sort()}</h1>
    </div>
  )
}



export default DisplaInput
