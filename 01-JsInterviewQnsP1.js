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


//--------------------------------------------------------------------------------------

// Q7 - Currying - breaking a function with many arguments into many functions that take one argument.
//Normal Function ---- fn(a, b)
//Curried Function --- fn(a)(b)

// Write a function which helps to achieve multiply(a)(b) and returns multiplication of a and b

//way 1
// function multiply(a){
//     return function (b) {
//        return a * b
//     }
// }

//way2 
const multiply = (a) => {
    return (b) => {
        return a*b
    }
}

console.log(multiply(2)(3));


//--------------------------------------------------------------------------------------

// Q7 - Array 

//Adding Elements to the Array
//Write a function which get's an array and an element and returns an array with this element at the end.

const numbers = [1,2]; 

const append = (arr, el) => {
    // arr.push(el) - modifies the original array(mutation)
    //return arr

    return [...arr, el] // Original array is safe, New array is created

    //We should not change original data, should create a new array instead - good way
}

const newNumbers = append(numbers, 4); 
console.log(newNumbers);
console.log(numbers)


// Q8 - Write a function which can concatenate 2 arrays
const arr1 = [1]; 
const arr2 = [2,3]; 

const mergeArrays = (a, b) => {
    // return a.concat(b) - way 1
    return [...a, ...b] //way 2
}

const result = mergeArrays(arr1, arr2); 
console.log(result);
console.log(arr1)
console.log(arr2)


// Q9 -  Write a function which accepts a list of users and a name to check if such user exists in the array

const users_new = [ 
{id: 1, name: 'Jack', isActive: true}, 
{id: 2, name: 'John', isActive: true}, 
{id: 3, name: 'Mike', isActive: false}, 
]; 

const isNameExists = (user, list) => {

    //find() - return object or undefined
    //some() - return true / false
    //filter() - return array
    return list.some((u) => u.name === user)
}

console.log(isNameExists('Jack', users_new)); 


// Q10 - Write a function which removes all duplicates from the array
const uniqueArr = (arr) => {
    //Set is not an array, it will return a Set object - new Set(arr)

    return [...new Set(arr)]
}

console.log(uniqueArr([1, 1, 2])); //[1,2]


// Q11 -  Sort the array of numbers
console.log([3, 5, 1].sort((a, b) => a - b))

// Q12 -  Sort an array of objects by author's last name
const books = [ 
{name: 'Harry Potter', author: 'Joanne Rowling'}, 
{name: 'War cross', author: 'Marie Lu'}, 
{name: 'THe Hunger Games', author: 'Suzanne Collins'} 
];

books.sort((a, b) => {
    const lastName1 = a.author.split(' ')[1]
    const lastName2 = b.author.split(' ')[1]

    return lastName1 < lastName2 ? -1 : 1
})

console.log(books)


//--------------------------------------------------------------------------------------

// Q13 -  Write a function which implements a range
const range = (a, b) => {
    //Creates a new array from something that looks like an array.
    //length - Create an array with 5 empty slots
    //mapping function - It runs once for each position in the array. index -> value
    return Array.from({length: b - a + 1}, (_, i) => a + i)
}

console.log(range(5, 10)) // [1,2,3,4,5...,10]