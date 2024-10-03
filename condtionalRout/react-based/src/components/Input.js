import React,{useRef} from 'react'

const Input = () => {
   const inputss= useRef()
   const hello=()=>{
console.log(inputss.current.value);

   }
  return (
    <div>
      <input ref={inputss} type="text" />
      <button onClick={hello}>click</button>
    </div>
  )
}

export default Input
