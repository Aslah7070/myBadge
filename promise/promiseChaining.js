const p=new Promise((resolve,reject)=>{
          setTimeout(() => {
               resolve("success-1")
          }, 4000);
})

const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve("success-2")
    }, 2000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve("success-3")
    }, 2000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve("success-3")
    }, 6000);
})


p.then((recive)=>{
    console.log(recive);
    
    return p1
    
})
.then((recive)=>{
    console.log(recive);
    
    return p2
})
.then((recive)=>{
    console.log(recive);
    return p3

})
.then((recive)=>{
    console.log(recive);
    

})