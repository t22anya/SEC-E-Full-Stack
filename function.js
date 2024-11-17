//function Declaration :- 1.function statement
// 2.function expression ,  3.Arrow function
// var  is hoisted
// and let/const is non hoisted
// in hosted wherever the initialization is done it goes to the top of the code and only the declaration not the value.

//1. Function statement  (they are load before the function runs that's why it is called hoisting)

// console.log(sum(4,6));
function sum(a,b){
    return(a+b);

}
console.log(sum(4,6));
// console.log(sum(4,6));
// console.log(typeof(NaN)); //type of NaN is number.


// 2.  Function expression  --(non-hoisted)

// const sum = function(){

const multiply=function(a,b){
    return a*b;
}
console.log(multiply(4,6));


// }

//  3.  Arrow function:- non hoisted

// const sum= () =>{
    const subtract=(a,b)=>{
        return a-b;

    }
    console.log(subtract(15,2));

// }
var age=24;
console.log(age);

//temproray deadzone is the zone of hoisted variable from line 0 to upto that line where the value of that hoisted variable.
// execution context:- it provide you all the enviornment/ingredientl to run your code.(Ingredient -call stack, browser Engine, web Api).
//GEC - Global execution context(it is only one for each file)
//FEC-  Function execution context(it can be multiple xdepend on number of function in the progrm)
//Eval- to evaluate String

// how the code will execute:-
// at first of the code the code will create firstly the GEC and GEC has 2 phases-creation and execution
// creation is used to memory allocate and it is initialized  all variable by undefined.
//in execution  variable which  has assigned memory allocation  and initialized the value to those variable.
// After initialized value the execution also divided in 2 phases(creation and exxcution) and again this process repeat.

// Callback function:- function that can be passed as an argument into another function.