// Q1. Write code to get an array of names from given array of users

const users = [
{id: 1, name: 'Jack', isActive: true, age:20},
{id: 2, name: 'John', isActive: true, age:18},
{id: 3, name: 'Mike', isActive: false, age:30},
]

//way1
// for (const user of users) {
//     console.log(user.name)
// }

//way2
// const nameSet = []
// for (let i = 0; i < users.length; i++) {
//     nameSet.push(users[i].name)
// }
// console.log(nameSet)

//way3 - good way
const nameSet = users.map(user => user.name)
console.log(nameSet)

//--------------------------------------------------------------------------------------
//Q2 - get back only active users 

//way1 
for (const user of users) {
    if (user.isActive) {
        console.log(user.name)
    }
}

//way2
//filter() keeps only the items that match a condition
//map() loop through an array and create a new array.
const activeUsers = users.filter((user) => user.isActive).map(user => user.name)
console.log(activeUsers)


//--------------------------------------------------------------------------------------
//Q3 - sort users by age descending  
const ageDesc = users.sort((a, b) => b.age - a.age).map(user => user.name)
console.log(ageDesc)

//--------------------------------------------------------------------------------------

//Q4 - null and undefined

let var1;
console.log(var1);
console.log(typeof var1); // undefined - A variable exists, but no value is assigned yet 
//👉 JavaScript says: “I don’t know the value yet”

let var2 = null;
console.log(var2);
console.log(typeof var2); //null - object - A value that means “no value on purpose”
//You say: “There is no value intentionally” - you want to clear or intentionally set no value.


//--------------------------------------------------------------------------------------

//Q5 - Hoisting
//Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution.
//Only declarations are hoisted, not assignments.
//function declarations are hoisted completely.
//Variable Hoisting with var (Partially Hoisted ⚠️)
//let and const Hoisting (Temporal Dead Zone ⚠️)

console.log(foo); // foo is not defined
foo = 1;

console.log(fomo); //undefined
var fomo = 2;

var foo;
foo = 3;
console.log(foo); //3

//console.log(b); // ❌ ReferenceError - Cannot access 'b' before initialization
let b = 20; 

//--------------------------------------------------------------------------------------

// Q6 - Closures
//Create a counter function which has increment and getValue functionality
/**
 *A closure is a JavaScript feature that allows a function to access variables from its outer scope, even after the outer function has finished executing.
Closures are commonly used for data hiding and encapsulation, because they allow us to keep variables private and prevent them from being changed directly.
 */

const privateCount = () => {
    let count = 0

    return {
        increment: (val = 1) => {
            count += val
        },

        getValue: () => {
            return count
        }
    }
}

const counter = privateCount();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); //1


//Create a function which stores a secret string inside which is not accessible but is returned only when we call this function.

const privateSecret = () => {
    let secret = "foo";

    return () => secret
}

const getSecret = privateSecret()
console.log(getSecret()) // 'secret