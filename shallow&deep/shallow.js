let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = { ...obj1 };

shallowCopy.b.c = 10;
console.log(obj1.b.c);  // Output: 10 (nested object is shared)
console.log(obj1
    
);  // Output: 10 (nested object is shared)



let obj={a:1,b:2};
let ab={...obj}
console.log(ab);
ab.a=11;
console.log(ab);
console.log(obj);

