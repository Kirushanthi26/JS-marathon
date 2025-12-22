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