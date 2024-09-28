import React, { useEffect,useState} from 'react';
import axios from "axios"

const Datas = () => {
    const [state,setState]=useState([])
   const [details,setDetails]=useState(null)
   console.log(details);
   
    const handleclick=(ID)=>{
       if(details===ID){
        setDetails(null)
       }else{
        setDetails(ID)
       }

    }
   useEffect(()=>{
   const display=async()=>{
    let responce= await axios.get('https://jsonplaceholder.typicode.com/posts')
     const result= await responce.data;
     console.log(result);
     setState(responce.data)
     
   }
   display()
   },[])
  return (
    <div>
    {
        state.map((val,index)=>(
           <div>
             <h1 onClick={()=>handleclick(val.id)}>{val.title} </h1>
             {/* <div> */}
               { details===val.id&&(
                    <span>{val.body}</span>
                )
            }
                 
                
            
             {/* </div> */}
           </div>

        ))
    }
    </div>
  )
}

export default Datas


// import React, { useState, useEffect } from 'react';

// const Accordion = () => {
//   const [data, setData] = useState([]); // State to hold the fetched data
//   const [openIndex, setOpenIndex] = useState(null); // State to manage open/closed sections
//   const [loading, setLoading] = useState(true); // State for loading

//   // Fetch data using useEffect
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
//         const result = await response.json();
//         setData(result.slice(0, 5)); // Get the first 5 items
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleAccordion = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null); // Close if the same section is clicked
//     } else {
//       setOpenIndex(index); // Open the clicked section
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading indicator
//   }

//   return (
//     <div className="accordion">
//       {data.map((item, index) => (
//         <div className="accordion-item" key={item.id}>
//           <div className="accordion-header" onClick={() => toggleAccordion(index)}>
//             <h2>{item.title}</h2>
//           </div>
//           {openIndex === index ?( // Render content only if this item is open
//             <div className="accordion-content">
//               <p>{item.body}</p>
//             </div>
//           ):(<h1>kjgkfghkdfjhkj</h1>)}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

