const p1=new Promise((resolve,reject)=>{
    resolve("success-1")
    //  reject("faileddd")
})

const p2=new Promise((resolve,reject)=>{
    resolve("success-2")
    // reject("faileddd")
})

const p3=new Promise((resolve,reject)=>{
    resolve("success-3")
})

const p4=new Promise((resolve,reject)=>{
    // resolve("success-4")
     reject("faileddd")
})



// const a=Promise.all([p1,p2,p3,p4])
// const a=Promise.any([p1,p2,p3,p4])
// const a=Promise.allSettled([p1,p2,p3,p4])
const a=Promise.race([p1,p2,p3,p4])
a.then((recive)=>{
    console.log(recive);
    
}).catch((fd)=>{
    console.log(fd);
    
})