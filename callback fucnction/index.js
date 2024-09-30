function display(fun,num){
    let a=100
     console.log(fun(a,num) );
     
}

const callback=(num1,num2)=>{   
        console.log(num1+num2);
        return num1+num2
}

display(callback,10)

