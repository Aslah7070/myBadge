const obj={
    name:"moosu",
    place:"malappuram"
}
let result =Object.entries(obj).flat()
console.log(result);
let vl=result.map((val)=>{
  return val+"aslah"
})
console.log(vl);



