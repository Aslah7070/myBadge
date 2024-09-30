const pro =new Promise((resolve,reject)=>{
    if(false){
        resolve("success")
    }else{
        reject("failed")
    }
})

pro.then((recive)=>{
    console.log(recive);
    
})
.catch((rr)=>{
    console.log(rr);
    
})
