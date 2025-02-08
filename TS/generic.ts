// function identity(arg: string|number){
//     return arg;
// }
// let output=identity("giveString");

// console.log(output.toUpperCase());// problem : shows error: bcz ts doesnt know if it is a string or a number

//Solution

function identity<T>(arg: T){//<T>  ->  generic value ; like auto in c++
  return arg;
}

let output1=identity<string>("string");
let output2=identity<number>(100);

console.log(output1.toUpperCase());
console.log(output2);


function firstElement<T>(arg: T[]){
    return arg[0];
}
let output=firstElement(["tahir","khan"]);
let op=firstElement([1,2,3,4]);




