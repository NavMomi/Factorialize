
//Factorials are often represented with the shorthand notation n!

//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function Factorial(num){
    if(num===0){
return 1;
    }
    else{
       return num*Factorial(num-1);
    }
    
}
let x=Factorial(5);
console.log(x);