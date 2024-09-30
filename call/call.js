const obj={
    name:"aslah",
    age:44,
    // methos:function(){
        
    // }
}
function hello(a,b){
       console.log(`${this.name} ${this.age} ${a} ${b}`);
       
}
hello.call(obj,20,50);
hello.apply(obj,[22,55])
const a=hello.bind(obj,1,2)
 

