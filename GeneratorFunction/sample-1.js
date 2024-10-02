function * display(){
   let num=1
   while(true){
    yield num++ ;
   }
}
const gen=display();
console.log(gen.next().value);
console.log(gen.next().value);


// function display(){
//     let num=1;
//     while(true){
//         return num++
//     }
// }
// const dis=display()
// console.log(dis());



