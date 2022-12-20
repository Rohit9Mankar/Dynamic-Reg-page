let multiply= function (x,y){

return x*y
};

const multiplBytwo=multiply.bind(this,2)
console.log(multiplBytwo(3))

const multiplBythree=multiply.bind(this,3)
console.log(multiplBythree(68))

//Using Closures

let multiplication= function(a){
  return function(b){
  
    console.log(a*b);
  }
}

let multiplicationBy4=multiplication(4);
multiplicationBy4(7);