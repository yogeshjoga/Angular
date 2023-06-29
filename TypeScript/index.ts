console.log("Hello the World!")


// lets write the some variables in typescript
var age: number = 26;

// re-assign the values, its not accepted from typeScript
// age = 'a';


function add(a:number, b: number):number;
 function add(a: number,b: number):number{
    return a+b;
}
 
 var c = add(10,20);
 console.log(c);

// let's created a new enum type object in typeScript 
enum persons{
    Up   = 1,
    Down = 2,
    Side = 3,
    Back = 4,
}

console.log(persons);


// Lets create a new Array

var num:number[] =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

var nums = [];
