// Q14 - Shuffle Function
const shuffleItems = (items) => {
    return items.map((item) => ({sort: Math.random(), value: item}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => (a.value))
}

console.log(shuffleItems([1,2]))
//--------------------------------------------------------------------------------------

//Q15 - Find the Number of Occurrences of Minimum Value in List
const arr = [1, 2, 3, 1, 1]
const minValue = Math.min(...arr)
const minArr = arr.filter((el) => el === minValue)
console.log(minArr.length)

/**
 arr = closed box of numbers
...arr = open the box and place numbers on the table
 */

//--------------------------------------------------------------------------------------