function display(a){
return function(b){
    return function(c){
        return function(d){
            return function(e){
                return a+b+c+d+e
            }
        }
    }
}
}
console.log(display(2)(3)(4)(5)(6));
