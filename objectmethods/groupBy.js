

//using array
let array=[1,2,3,
    4,6
]
let gouped=Object.groupBy(array,num=>num%2===0?"even":"odd");
console.log(gouped);




//using  object------
let obj=
[
    {name:"aslah",place:" malppuram"},
    {name:"sahu",place:" pandikad"},


]
let b=Object.groupBy(obj,(key)=>key.name)
console.log(b);
