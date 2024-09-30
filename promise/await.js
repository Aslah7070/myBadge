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
   resolve("success-4")
}, 6000);
})

async function dis(){
   const result= await p;
   console.log(result);

   const result1= await p1;
   console.log(result1);
   const result2= await p2;
   console.log(result2);

   const result3= await p3;
   console.log(result3);

}

dis()